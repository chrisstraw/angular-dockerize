# https://dev.to/this-is-angular/multi-stage-docker-builds-with-angular-and-nginx-4j9d
# https://javascript.plainenglish.io/how-to-dockerize-angular-application-3cd67e963832
# https://dev.to/oneofthedevs/docker-angular-nginx-37e4
# https://www.marcinlovescode.com/cloud/accessing-azure-npm-feed-from-docker-build -> https://github.com/wkrzywiec/aston-villa-app

###### Install dependencies only when needed ######
FROM node:16-alpine AS builder
ARG CONFIGURATION='production'

# Make /app as working directory
WORKDIR /projects/example-app/src/app

# Copy package.json file
COPY package.json .

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the source code to the /app directory
COPY . .

# Build the application
RUN npm run build --  --output-path=dist --configuration=$CONFIGURATION --output-hashing=all


######  Use NgInx alpine image  ###### 
FROM nginx:stable-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy nginx config file
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy dist folder fro build stage to nginx public folder
COPY --from=builder /projects/example-app/src/app/dist /usr/share/nginx/html

# Start NgInx service
CMD ["nginx", "-g", "daemon off;"]


# docker image ls
# docker run -p 5757:80 -d example-app-image:v1.0.0