FROM node:20.14.0-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY package.json /app/package.json
WORKDIR /app

FROM base AS deps
COPY pnpm-lock.yaml .npmrc ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm fetch

FROM deps AS prod-deps
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile --offline

FROM deps AS build
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --offline
ARG ENV
RUN pnpm build:${ENV}

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/out /app/out
EXPOSE 3000
CMD [ "pnpm", "serve" ]
