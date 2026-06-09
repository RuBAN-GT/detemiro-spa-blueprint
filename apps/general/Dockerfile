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
COPY apps/general /workspace/apps/general

# Build
RUN corepack enable
RUN yarn install
RUN yarn build

###################################################################
# Production stage
###################################################################
FROM node:22-slim

ENV NODE_ENV=production
WORKDIR /app

# Copy artifacts
COPY --from=builder /workspace/apps/general/.output ./app/apps/general/.output
RUN cd ./app/apps/general/.output
RUN yarn install

# Do it!
EXPOSE 8080
CMD ["node", "./app/apps/general/.output/index"]
