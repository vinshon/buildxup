# Use public Node.js 20 image from Docker Hub

FROM node:20 AS builder
 
RUN mkdir /app

WORKDIR "/app"
 
# Clean up old node_modules and lock file if they exist

RUN rm -rf node_modules package-lock.json
 
# Copy package files and install dependencies

COPY package.json package-lock.json* ./

RUN npm install --legacy-peer-deps
 
# Copy source code and environment file

COPY ./ ./

COPY .env .env
 
# Build the application

RUN npm run build
 
# Final stage: Use Apache HTTP server from Docker Hub

FROM httpd:2.4
 
EXPOSE 80
 
# Create target directory for built app

RUN mkdir -p /usr/local/apache2/htdocs/
 
# Copy built frontend files from builder

COPY --from=builder /app/build /usr/local/apache2/htdocs/

COPY --from=builder /app/httpd.conf /usr/local/apache2/conf/httpd.conf
 
# Set appropriate permissions (user:group www-data is not default in httpd, but used in Debian-based images like Apache in Ubuntu; httpd uses `daemon`)

RUN chown -R daemon:daemon /usr/local/apache2/htdocs/

 