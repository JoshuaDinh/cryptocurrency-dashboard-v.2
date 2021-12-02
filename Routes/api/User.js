const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const config = { headers: { Authorization: `Bearer ${req.cookies}` } };
    const cookie = req.cookies;
    const response = await axios.get(" https://api.coinbase.com/v2/user", {
      Authorization: `${req.cookies}`,
    });
    res.status(200).json({ response });
    console.log(response);
    console.log(req.cookies);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
