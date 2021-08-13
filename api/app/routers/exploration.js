const express = require("express");
const router = express.Router();

router
  .get("/:id(\\d+)", (req, res) => {
    res.json({ message: "exploration informations" });
  })
  .post("/create", (req, res) => {
    res.json({ message: "create an exploration" });
  })
  .patch("/:id(\\d+)/update", (req, res) => {
    res.json({ message: "update exploration informations" });
  })
  .delete("/:id(\\d+)/delete", (req, res) => {
    res.json({ message: "delete an exploration" });
  });

module.exports = router;
