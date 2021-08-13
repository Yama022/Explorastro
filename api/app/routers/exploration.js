const express = require("express");
const router = express.Router();

router
  .get("/:id", (req, res) => {
    res.send("exploration informations");
  })
  .post("/:id/create", (req, res) => {
    res.send("create an exploration");
  })
  .patch("/:id/update", (req, res) => {
    res.send("update exploration informations");
  })
  .delete("/:id/delete", (req, res) => {
    res.send("delete an exploration");
  });

module.exports = router;
