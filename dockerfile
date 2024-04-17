FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# If you are building your code for production

# Bundle app source
COPY index.js .

EXPOSE 3000
CMD [ "node", "index.js" ]
