FROM node:24

WORKDIR /dashboard

COPY package.json .

COPY . .

RUN npm ci

CMD ["npm", "run", "build"]
