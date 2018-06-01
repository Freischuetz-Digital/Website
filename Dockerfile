FROM nginx:alpine
LABEL maintainer="Daniel Röwenstrunk for the FreiDi"
COPY dist/* /usr/share/nginx/html/
