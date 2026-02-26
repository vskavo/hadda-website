# Stage 1: Build the React application
FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Target port for Cloud Run (uses PORT env variable)
# Cloud Run sets PORT automatically, defaults to 8080 usually. Let's make nginx listen to it.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start NGINX
# We use a shell command to substitute PORT env variable into the nginx config just in case.
# But cloud run requires listening on $PORT. 
# Another approach in nginx docker is to replace the port in default.conf using envsubst before running:
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
