# Use Node.js image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -g expo-cli && npm install

# Copy project files
COPY . .

# Expose Expo default ports
EXPOSE 8081 19000 19001 19002

# Start Expo in tunnel mode (you can change to LAN if needed)
CMD ["npx", "expo", "start", "--tunnel"]
