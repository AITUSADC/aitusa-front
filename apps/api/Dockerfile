# syntax=docker/dockerfile:1
FROM node:24-bookworm-slim AS base
WORKDIR /app

FROM base AS manifests
COPY package.json package-lock.json ./
COPY apps/api/package.json ./apps/api/package.json
COPY apps/web/package.json ./apps/web/package.json

FROM manifests AS builder
RUN npm ci --workspace=@aitusa/api --include-workspace-root=false
COPY apps/api ./apps/api
RUN npm run build --workspace=@aitusa/api

FROM manifests AS production-deps
RUN npm ci --workspace=@aitusa/api --include-workspace-root=false --omit=dev \
    && npm cache clean --force

FROM base AS runner
ENV NODE_ENV=production
ENV API_PORT=3001
COPY --from=production-deps --chown=node:node /app ./
COPY --from=builder --chown=node:node /app/apps/api/dist ./apps/api/dist
USER node
EXPOSE 3001
CMD ["node", "apps/api/dist/main.js"]
