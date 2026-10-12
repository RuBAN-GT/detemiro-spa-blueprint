###################################################################
# Build stage
###################################################################
FROM node:22-slim AS builder

ENV NODE_ENV=production
WORKDIR /workspace

# Generic yarn section
COPY .yarnrc.yml /workspace/.yarnrc.yml
COPY yarn.lock /workspace/yarn.lock
COPY .yarn /workspace/.yarn
COPY package.json /workspace/

# Monorepo
COPY apps/general/package.json /workspace/apps/general/package.json

# Build
RUN corepack enable
RUN yarn install --immutable
COPY apps/general /workspace/apps/general
RUN yarn build

###################################################################
# Production stage
###################################################################
FROM node:22-slim

ENV NODE_ENV=production
WORKDIR /app

# Copy artifacts
# Modern.js deploy includes the production dependencies in .output/node_modules.
COPY --from=builder /workspace/apps/general/.output ./

# Do it!
EXPOSE 8080
CMD ["node", "index.js"]
