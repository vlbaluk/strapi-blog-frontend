FROM node:12.2 AS production

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV NEXT_TELEMETRY_DISABLED 1
# depends on working backend like: https://strapi-blog-backend
ARG NEXT_PUBLIC_STRAPI_API_URL
ARG NEXT_PUBLIC_STRAPI_API_URL_TEST

RUN export

COPY package.json package-lock.json /app/
RUN npm install

# Or if you're using Yarn
# ADD package.json yarn.lock /app/
# RUN yarn install
COPY . /app/

# requires working backend
RUN npm run build

CMD ["npm", "run", "start"]
