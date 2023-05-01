FROM node:16.20.0-alpine3.16 as builder
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM node:16.20.0-alpine3.16 as runner
WORKDIR /app
ENV NODE_ENV production

COPY next-env.d.ts next.config.js package.json package-lock.json ./
RUN npm install --production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

EXPOSE 8060

CMD ["npm", "start", "--", "-p", "8060"]
