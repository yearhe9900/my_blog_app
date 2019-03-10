FROM circleci/node:latest-browsers

WORKDIR /usr/src/app/
USER root
COPY package.json ./
RUN yarn

COPY ./ ./

EXPOSE 3000

CMD ["yarn", "start"]