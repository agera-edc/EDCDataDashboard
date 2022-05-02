# Stage 1: Compile and Build angular codebase
FROM node:lts as build

WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build

# Stage 2: Serve app with nginx
FROM nginx:alpine
# Copying compiled code and nginx config to different folder
COPY --from=build /app/dist/edc-demo-client  /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
