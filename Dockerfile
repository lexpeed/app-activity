# syntax=docker/dockerfile:1

FROM node:20.14.0-slim AS base
ENV CI=true
# RUN apt-get update && apt-get install -y libc6-compat
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
  npm install -g pnpm@9.3.0
RUN pnpm config set auto-install-peers true

FROM base as deps
WORKDIR /app
COPY pnpm-lock.yaml .npmrc ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
  pnpm fetch \
  | grep -v "cross-device link not permitted\|Falling back to copying packages from store"

FROM deps as build
WORKDIR /app
COPY package.json ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
  pnpm install --offline \
  | grep -v "cross-device link not permitted\|Falling back to copying packages from store"
COPY . .
ARG ENV
RUN pnpm build:${ENV}

FROM deps
ENV NODE_ENV production
WORKDIR /app

# static files
COPY --from=build /app/out ./out
COPY --from=build /app/package.json ./package.json

# dynamic files
# COPY --from=build /app/public ./public
# COPY --from=build /app/.next/standalone ./
# COPY --from=build /app/.next/static ./.next/static

RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
  pnpm install --prod --offline \
  | grep -v "cross-device link not permitted\|Falling back to copying packages from store"
EXPOSE 3000

CMD ["/bin/bash", "-c", "pnpm serve"] # static files
# CMD ["node", "server.js"] # dynamic files
