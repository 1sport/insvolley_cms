# Creating multi-stage build for production
FROM node:18-alpine3.18 as build
RUN apk update \
RUN apk add --no-cache build-base
RUN apk add --no-cache gcc
RUN apk add --no-cache autoconf
RUN apk add --no-cache automake
RUN apk add --no-cache zlib-dev
RUN apk add --no-cache libpng-dev
RUN apk add --no-cache vips-dev
RUN apk add --no-cache git > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm install -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install
ENV PATH /opt/node_modules/.bin:$PATH
WORKDIR /opt/app
COPY . .
RUN npm run build

# Creating final production image
FROM node:18-alpine
RUN apk add --no-cache vips-dev
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
WORKDIR /opt/app
COPY --from=build /opt/app ./
ENV PATH /opt/node_modules/.bin:$PATH

RUN chown -R node:node /opt/app
USER node
EXPOSE 1337
CMD ["npm", "run", "start"]
