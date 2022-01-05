ARG HOST=localhost

FROM node:16.13.1 as build
RUN apt update && apt install gettext-base
WORKDIR /app
COPY src/ src/
COPY public public/
COPY package.json .
COPY package-lock.json .

RUN npm i && npm run build

# prepare nginx configuration file
COPY default.conf.template .
RUN envsubst "${HOST}" > ./default.conf < ./default.conf.template

FROM nginx:1.21.5-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/default.conf /etc/nginx/conf.d/default.conf
