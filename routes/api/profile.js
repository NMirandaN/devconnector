const express = require("express");
const router = express.Router();

// @rout GET api/profile/test
router.get("test/", (req, res) =>
  res.json({
    msg: "users works"
  })
);

module.exports = router;
