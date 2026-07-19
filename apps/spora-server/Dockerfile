# ---- Build stage ----
FROM node:20-alpine AS build

RUN corepack enable && corepack prepare pnpm@10.12.1 --activate

WORKDIR /app

# Copy workspace root files needed for install
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml .npmrc ./
COPY packages/types/package.json ./packages/types/
COPY apps/spora-server/package.json ./apps/spora-server/

RUN pnpm install --frozen-lockfile

# Copy source
COPY packages/types/ ./packages/types/
COPY apps/spora-server/ ./apps/spora-server/

RUN pnpm --filter @mycellium/spora-server build

# ---- Runtime stage ----
FROM node:20-alpine AS runtime

RUN corepack enable && corepack prepare pnpm@10.12.1 --activate

WORKDIR /app

COPY --from=build /app/package.json /app/pnpm-workspace.yaml /app/pnpm-lock.yaml /app/.npmrc ./
COPY --from=build /app/packages/types/ ./packages/types/
COPY --from=build /app/apps/spora-server/package.json ./apps/spora-server/
COPY --from=build /app/apps/spora-server/dist/ ./apps/spora-server/dist/

RUN pnpm install --frozen-lockfile --prod

ENV NODE_ENV=production
EXPOSE 3001

CMD ["node", "apps/spora-server/dist/index.js"]
