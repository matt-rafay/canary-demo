FROM nginx:alpine

LABEL maintainer="Matt Kryshak <matt@rafay.co>"

COPY nginx/conf/certs /etc/nginx/certs
COPY nginx/conf/default-coffee.conf /etc/nginx/conf.d/default.conf
COPY nginx/conf/nginx.conf /etc/nginx/nginx.conf
COPY nginx/html /usr/share/nginx

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
