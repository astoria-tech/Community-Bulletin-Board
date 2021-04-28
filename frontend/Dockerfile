FROM node:10.15

WORKDIR /srv

# Install requirements
ADD package.json package-lock.json ./
RUN npm install

# Add the source
ADD *js *json *md ./
ADD src src

CMD ["npm", "start"]