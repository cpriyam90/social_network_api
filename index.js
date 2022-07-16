const express = require('express');
const routes = require('./routes');
const connection = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`App is working on port ${PORT}!`);
  });
})

