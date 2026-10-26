
# ==========================================
# Stage 1: Build React + Vite frontend
# ==========================================
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies reproducibly
COPY package.json package-lock.json ./
RUN npm ci

# Copy application source
COPY . .

# Build production assets
RUN npm run build


# ==========================================
# Stage 2: Production Nginx server
# ==========================================
FROM nginxinc/nginx-unprivileged:alpine AS runner

# Remove default Nginx configuration
RUN rm -f /etc/nginx/conf.d/default.conf

# Add production Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built frontend assets
COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html

# Nginx unprivileged image listens on port 8080
EXPOSE 8080

# Container health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
