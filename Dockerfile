FROM node:12.2 AS production

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV NEXT_TELEMETRY_DISABLED 1
# depends on working backend
#ENV NEXT_PUBLIC_STRAPI_API_URL https://strapi-blog-backend

COPY package.json package-lock.json /app/
RUN npm install

# Or if you're using Yarn
# ADD package.json yarn.lock /app/
# RUN yarn install

# requires working backend
RUN npm run build

COPY . /app/

CMD ["npm", "run", "start"]
