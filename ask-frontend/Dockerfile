FROM nginx:1.15.2-alpine

COPY public /usr/share/nginx/html
COPY public/404/index.html /usr/share/nginx/html/404.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
