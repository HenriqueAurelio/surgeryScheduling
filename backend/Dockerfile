# Base image
FROM node:18

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/
# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Copy the .env file
COPY .env ./

# Creates a "dist" folder with the production build
RUN npm run build

RUN npx prisma migrate dev --name init


# Start the server using the production build
CMD ["npm", "run", "start:dev"]