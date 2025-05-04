# Use the Node.js 20 base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app _Below command is when you've set start script in package.json 
# CMD ["npm", "start"]  
# Otherwise use this below 
# CMD ["node", "index.js"]

#for dev mode 
CMD ["npm", "run","dev"]  


