FROM node:18


# Create app directory
WORKDIR /travelio-technical-test

COPY . .

RUN chmod +x ./entrypoint.sh

CMD [ "./entrypoint.sh" ]