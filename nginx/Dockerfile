FROM nginx:latest

RUN rm -f /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

RUN touch /usr/share/nginx/html/index.js

RUN chmod +x /usr/share/nginx/html/index.js

EXPOSE 80

RUN npm install

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]