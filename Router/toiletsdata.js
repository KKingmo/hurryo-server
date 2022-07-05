const express = require("express");
const router = express.Router();
const request = require("request");

var url = `${process.env.REACT_APP_TOILETS_DATA}`;
router.get("/", (req, res) => {
  request(
    {
      url: url,
      method: "GET",
    },
    (error, response, body) => {
      res.send(body);
    }
  );
});

module.exports = router;
