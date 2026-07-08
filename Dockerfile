FROM node:22-alpine AS builder

WORKDIR /app

ENV HUSKY=0

COPY package*.json ./

# Run clean install for exact version matching
RUN npm ci 

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY --from=builder /app/package*.json ./

RUN npm ci --omit=dev --ignore-scripts

EXPOSE 5000

CMD ["node", "dist/main"]
