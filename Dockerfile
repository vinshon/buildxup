# ---------- Build Stage ----------
FROM 530061243896.dkr.ecr.us-east-1.amazonaws.com/node-alpine:22 AS builder
WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

# Copy app and .env from build context
COPY . . 

# Build app
RUN npm run build

# ---------- Production Stage ----------
FROM 530061243896.dkr.ecr.us-east-1.amazonaws.com/nginx-alpine:latest
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]