FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/first-projet-angular /usr/share/nginx/html