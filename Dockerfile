FROM nginx:1.19.1-alpine

COPY ./target/ /etc/nginx/
COPY ./build/ /usr/share/nginx/html/
