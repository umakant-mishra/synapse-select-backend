# Use official Node.js LTS image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies (only production)
RUN npm install --omit=dev

# Copy source files
COPY . .

# Expose port (default 5000, can be overridden by env)
EXPOSE 5000

# Set environment variables
ENV NODE_ENV=production

# Start the server
CMD ["node", "index.js"]
