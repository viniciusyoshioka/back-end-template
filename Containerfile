FROM node:24-alpine

WORKDIR /app

COPY src src
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY tsconfig.build.json tsconfig.build.json
COPY tsconfig.json tsconfig.json

RUN corepack enable pnpm \
    && pnpm install --frozen-lockfile --ignore-scripts \
    && pnpm run build

EXPOSE 3000

CMD ["node", "dist/main"]
