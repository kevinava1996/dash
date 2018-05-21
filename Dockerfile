FROM node:latest

RUN mkdir parse-dashboard

ADD . /parse-dashboard
WORKDIR /parse-dashboard
RUN npm install

ENV APP_ID A1P2P3I4D5
ENV MASTER_KEY M1A2S3T4E5R6K7E8Y9
ENV SERVER_URL https://pushnotif.scalingo.io/

# Optional
# ENV APP_NAME setFriendlyAppName

EXPOSE 4040

CMD [ "npm", "start" ]
