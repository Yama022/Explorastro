require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3003;
const router = require("./app/routers");

app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("/api/v1/");
});

app.use("/api/v1", router);

app.listen(port, (_) => {
  console.log(`http://localhost:${port}`);
});
