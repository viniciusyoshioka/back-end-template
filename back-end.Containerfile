# Base layer - used to build the code
FROM node:24-alpine AS builder

WORKDIR /app

COPY tsconfig.json tsconfig.build.json package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN corepack enable pnpm \
    && pnpm install --frozen-lockfile --ignore-scripts

COPY src src

RUN pnpm run build



# Server layer - used to execute the code
FROM node:24-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN corepack enable pnpm \
    && pnpm install --frozen-lockfile --ignore-scripts \
    && pnpm cache delete

COPY --from=builder /app/dist dist

EXPOSE 3000

CMD ["pnpm", "start:prod"]
