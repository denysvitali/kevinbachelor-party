FROM node:latest AS builder
COPY . /app
WORKDIR /app
RUN yarn install
RUN yarn build

FROM nginx:latest
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/src/assets/ /usr/share/nginx/html/assets
COPY --from=builder /app/nginx/default.conf /etc/nginx/conf.d/default.conf
