FROM node:20.14.0-slim AS base

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY package.json /app/package.json
WORKDIR /app
RUN corepack install

FROM base AS deps
COPY pnpm-lock.yaml .npmrc ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store pnpm fetch

FROM deps AS prod-deps
COPY . .
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store pnpm install --prod --frozen-lockfile --offline

FROM deps AS build
COPY . .
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile --offline
ARG ENV
RUN pnpm build:${ENV}

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules

# COPY --from=build /app/out /app/out # static files (output=export)
COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public

EXPOSE 3000

CMD [ "pnpm", "start" ]
