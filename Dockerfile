# ---------- Build Stage ----------
FROM node:22-alpine AS builder
WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

# Copy app and .env from build context (CodeBuild will download .env from S3 before this)
COPY . . 

# Build app (env variables required for React must be present now)
RUN npm run build

# ---------- Production Stage: lightweight, use Nginx to serve static files ----------
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
