require("dotenv").config();
const express = require("express");
const log = require("log-beautify");
const rateLimit = require("express-rate-limit");

const app = express();
const cors = require("cors");

const port = process.env.PORT || 3003;
const expressSwagger = require("express-swagger-generator")(app);
const router = require("./app/routers");
const { SWAGGER, ERROR } = require("./app/constants");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rate Limiting for API
const apiRequestLimiter = rateLimit({
  windowMs: 1 * 30 * 1000, // 1 minute
  max: 2, //10 * (60 / 2), // limit each IP to 2 requests per windowMs (60 seconds) // 5 requests per second, so 300 requests per minute
  handler: (req, res) => {
    return res.status(429).json({ message: ERROR.RATE_LIMIT });
  }
})

// To avoid the "CANNOT GET /" message, we automatically redirect to the documentation
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

// The expressSwagger function returns the auto-generated swagger documentation on /api-docs
expressSwagger(SWAGGER);

// Images uploaded to the server will be served on /uploads
app.use("/uploads", express.static("./uploads"));

app.use("/api/v1", apiRequestLimiter);
app.use("/api/v1", router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  log.success(`👂 ExplorAstro-API listen on http://localhost:${port}`);
});
