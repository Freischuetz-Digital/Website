FROM openjdk:8-jdk as builder
LABEL maintainer="Peter Stadler"

RUN apt-get update \
    && apt-get install --yes --no-install-recommends --no-install-suggests ant

WORKDIR /opt/builder
COPY . .

RUN ant

FROM nginx:alpine
LABEL maintainer="Daniel Röwenstrunk for the FreiDi"
COPY --from=builder /opt/builder/dist/ /usr/share/nginx/html/
