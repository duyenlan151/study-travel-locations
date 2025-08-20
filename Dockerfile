# Use an official Node.js runtime as a base image
FROM node:20.10-alpine

# Set working directory (important!)
WORKDIR /app

# Install PM2 globally
RUN npm install --global pm2

# Copy package.json, prisma schema and lock file first (better caching)
COPY package*.json ./
COPY prisma ./prisma

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build app Build app (optional if you run dev inside container)
# RUN npm run build

# Allow user persmission
RUN chown -R node:node /app

# Expose port
EXPOSE 3000

# Run container as non-root (unprivileged) user
USER node

# Start app with PM2
CMD [ "pm2-runtime", "start", "npm", "--", "run", "dev" ]
