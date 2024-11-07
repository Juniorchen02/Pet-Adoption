# Dockerfile (backend)
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file ke dalam container
COPY . .

# Expose port (sesuaikan dengan port backend, misalnya 5000)
EXPOSE 5000

# Jalankan backend
CMD ["node", "index.js"]
 