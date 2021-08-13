const express = require("express");
const router = express.Router();

router
  .get("/:id", (req, res) => {
    res.send("user");
  })
  .patch("/:id/update", (req, res) => {
    res.send("update user informations");
  })
  .patch("/:id/update/password", (req, res) => {
    res.send("update user password");
  })
  .patch("/:id/delete", (req, res) => {
    res.send("delete user");
  });

module.exports = router;
