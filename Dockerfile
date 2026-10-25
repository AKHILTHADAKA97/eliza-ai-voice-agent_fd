# Multi-stage security-hardened Dockerfile for React/Vite Frontend
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci --ignore-scripts
COPY . .
RUN npm run build

# Production runner with non-root unprivileged Nginx
FROM nginxinc/nginx-unprivileged:alpine AS runner

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]

