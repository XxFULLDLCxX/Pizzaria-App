FROM node:18-alpine AS base

RUN corepack enable pnpm

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies using the pnpm package manager
COPY package.json pnpm-lock.yaml ./
RUN pnpm i --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# RUN pnpm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

COPY --from=builder /app/public ./public

CMD ["pnpm", "dev"]
