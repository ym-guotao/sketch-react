FROM zzswang/docker-nginx-react:latest
MAINTAINER zzswang@gmail.com

ENV APP_DIR=/app \
    API_PLACEHOLDER=/api \
    API_GATEWAY=https://api.36node.com

## Suppose your app is in the dist directory.
COPY ./build /app
