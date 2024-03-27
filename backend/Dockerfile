FROM node:18.19-alpine3.18

# Create app directory
WORKDIR /apolitical/backend

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY src ./src

RUN yarn install
RUN yarn build

# Bundle app source
COPY . .

EXPOSE 3000
CMD ["yarn", "start"]
