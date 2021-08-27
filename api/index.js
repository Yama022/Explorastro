require("dotenv").config();
const express = require("express");
const log = require("log-beautify");

const app = express();
const cors = require("cors");

const port = process.env.PORT || 3003;
const expressSwagger = require("express-swagger-generator")(app);
const router = require("./app/routers");
const { SWAGGER } = require("./app/constants");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// To avoid the "CANNOT GET /" message, we automatically redirect to the documentation
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

// The expressSwagger function returns the auto-generated swagger documentation on /api-docs
expressSwagger(SWAGGER);

// Images uploaded to the server will be served on /uploads
app.use("/uploads", express.static("./uploads"));

app.use("/api/v1", router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  log.success(`👂 ExplorAstro-API listen on http://localhost:${port}`);
});
