FROM node:10.15

WORKDIR /srv

#install requirements
ADD package.json package-lock.json ./
RUN npm install

#add source
ADD *.js *.json *.md ./
ADD src src

CMD ["npm","start"]
