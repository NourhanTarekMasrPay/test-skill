# Stage 1: Build the Nest.js application

FROM node:18-alpine AS build 

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build




# Stage 2: Run the Nest.js application

FROM node:18-alpine
WORKDIR /app
# This is why the multi-stage build is so effective for small final images.
COPY --from=build /app/dist ./dist
# This is needed to install only production dependencies for the runtime.
COPY package*.json ./
# Install only production dependencies. The `npm ci` command is generally preferred for CI/CD as it's deterministic.
RUN npm install --omit=dev

# Expose the port your Nest.js application listens on.This doesn't actually publish the port, but declares that the container expects to listen on it.
# It's good documentation and can be used by `docker run -P`.
EXPOSE 8000 

# Define the command to run your application when the container starts.
# This assumes your compiled main file is at dist/main.js
CMD ["node", "dist/main"]
