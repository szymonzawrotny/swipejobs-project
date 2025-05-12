FROM node:18

RUN apt-get update && apt-get install -y \
    git \
    watchman \
    python3 \
    make \
    g++ \
    && apt-get clean

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm install -g expo-cli

EXPOSE 8081 19000 19001 19002

CMD ["expo", "start", "-c"]
