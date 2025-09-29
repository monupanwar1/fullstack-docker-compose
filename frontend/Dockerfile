FROM oven/bun:latest


WORKDIR /app

COPY package.json ./


RUN bun install

COPY . .

# Expose port
EXPOSE 5173

# Start the app
CMD ["bun", "run", "dev"]
