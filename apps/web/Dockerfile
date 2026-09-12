# syntax=docker/dockerfile:1
FROM node:24-bookworm-slim AS base
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
COPY apps/api/package.json ./apps/api/package.json
COPY apps/web/package.json ./apps/web/package.json
RUN npm ci --workspace=@aitusa/web --include-workspace-root=false

FROM deps AS builder
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_STANDALONE=true
# Rewrites and NEXT_PUBLIC_* values are embedded by next build.
ARG API_URL=http://api:3001
ARG NEXT_PUBLIC_AITUSA_TELEGRAM_CONTACT
ARG NEXT_PUBLIC_AITUSA_TELEGRAM
ARG NEXT_PUBLIC_AITUSA_INSTAGRAM
ARG NEXT_PUBLIC_AITUSA_TELEGRAM_SOCIAL_LEAD
ARG NEXT_PUBLIC_AITUSA_TELEGRAM_MEDIA_LEAD
ARG NEXT_PUBLIC_AITUSA_TELEGRAM_CULTURE_LEAD
ARG NEXT_PUBLIC_AITUSA_TELEGRAM_EXTERNAL_RELATIONS_LEAD
ARG NEXT_PUBLIC_AITUSA_TELEGRAM_ACADEMIC_LEAD
ARG NEXT_PUBLIC_AITUSA_TELEGRAM_DIGITAL_LEAD
ARG NEXT_PUBLIC_AITUSA_TELEGRAM_SCIENCE_LEAD
COPY apps/web ./apps/web
RUN npm run build --workspace=@aitusa/web

FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
COPY --from=builder --chown=node:node /app/apps/web/.next/standalone ./
COPY --from=builder --chown=node:node /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder --chown=node:node /app/apps/web/public ./apps/web/public
USER node
EXPOSE 3000
CMD ["node", "apps/web/server.js"]
