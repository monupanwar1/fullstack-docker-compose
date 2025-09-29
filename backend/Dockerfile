FROM oven/bun:latest

# Install OpenSSL for Prisma
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY package.json ./


# Install dependencies
RUN bun install


COPY prisma ./prisma

# Generate Prisma client
RUN bun generate

# Copy rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["bun", "run", "start"]
