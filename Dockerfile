# Stage 1: Build the React app
FROM node:alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the built app using Nginx
FROM nginx

# Copy the custom Nginx configuration file into the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built app from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

