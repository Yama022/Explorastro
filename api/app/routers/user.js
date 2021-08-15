const express = require("express");
const router = express.Router();

router
  .get("/:id(\\d+)", (req, res) => {
    res.json({ message: "user" });
  })
  .patch("/:id(\\d+)/update", (req, res) => {
    res.json({ message: "update user informations" });
  })
  .patch("/:id(\\d+)/update/password", (req, res) => {
    res.json({ message: "update user password" });
  })
  .delete("/:id(\\d+)/delete", (req, res) => {
    res.json({ message: "delete user" });
  });

module.exports = router;
