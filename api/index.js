require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3003;
const router = require("./app/routers");
const expressSwagger = require('express-swagger-generator')(app);

app.use(cors());

app.use(express.json());

const options = {
  swaggerDefinition: {
    info: {
      description: 'Official documentation of the ExplorAstro API for my love Front-End Developers',
      title: 'ExplorAstro-API',
      version: '0.7-alpha',
    },
    host: 'explorastro-api.herokuapp.com',
    basePath: '/',
    produces: [
      "application/json"
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: "",
      }
    }
  },
  basedir: __dirname,
  files: ['./app/routers/*.js', './app/controllers/*.js']
};

expressSwagger(options);

app.get('/', (req, res) => {
  res.redirect(`/api-docs`);
});

app.use("/api/v1", router);

app.listen(port, (_) => {
  console.log(`http://localhost:${port}`);
});
