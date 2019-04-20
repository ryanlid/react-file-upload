FROM node

WORKDIR /app

COPY . /app

RUN cd /app && npm install && \
cd client && npm install

EXPOSE 3000

ENTRYPOINT [ "npm","run","dev" ]
