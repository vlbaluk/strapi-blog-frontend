FROM node:12.2 AS production

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV NEXT_PUBLIC_STRAPI_API_URL http://strapi:1337

COPY package.json package-lock.json /app/
RUN npm install

# Or if you're using Yarn
# ADD package.json yarn.lock /app/
# RUN yarn install

COPY . /app/
RUN npm run build

CMD ["npm", "start"]
