FROM node:21

WORKDIR /dashboard

COPY package.json .

COPY . .

RUN npm ci

CMD ["npm", "run", "build"]
