FROM node:carbon
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

#FROM node:12-alpine
# RUN: install necessary things. Maybe you don't need it, if your app is simple.
#RUN apk add --no-cache bash
#WORKDIR /app
# in COPY: the first . represents all the files in that directory on your local machine: the second . says to copy it into the container. We could supply paths if we want, but dots are way shorter for what we want
#COPY . . 
# in RUN: we need to install the application's dependencies for our container
# RUN npm install
# this is the main command to run our app to execute it. You'll need to rework that line. 
# CMD ["node", "src/index.js"]