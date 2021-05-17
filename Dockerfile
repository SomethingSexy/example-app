FROM nginx as base

COPY ./public/* /usr/share/nginx/html/