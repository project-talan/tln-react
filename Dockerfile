FROM nginx:1.17.10-alpine

COPY ./target/ /etc/nginx/
COPY ./build/ /usr/share/nginx/html/
