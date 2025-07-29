# Use official Node.js 20 image
FROM node:20

# Create app directory
WORKDIR /app

# Optional: Clean up in case you're rebuilding inside Docker (usually not necessary here)
RUN rm -rf node_modules package-lock.json

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

# Copy the rest of your app's source code
COPY . .

# Copy env if needed
COPY .env .env

# Build the app (if you have a build step; e.g., Next.js, React, etc.)
RUN npm run build

# Expose app port (update if your app runs on a different port)
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
