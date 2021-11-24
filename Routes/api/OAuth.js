const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const axios = require("axios");

// User clicks link to connect with Coinbase - link is sent to backend endpoint and redirected with proper values
router.get("/redirect", (req, res) => {
  try {
    res.redirect(
      `https://www.coinbase.com/oauth/authorize?response_type=code&client_id=${process.env.OAUTH_CLIENT_ID}&redirect_uri=${process.env.OAUTH_REDIRECT}&scope=wallet:accounts:read,wallet:transactions:read  `
    );
  } catch (err) {
    console.log(err);
  }
});

// Once user is redirected back from Coinbase we retrieve the code and redirect again back to Coinbase to retrieve token
function getToken(axios, code) {
  const values = {
    grant_type: "authorization_code",
    code: code,
    client_id: process.env.OAUTH_CLIENT_ID,
    client_secret: process.env.OAUTH_SECRET,
    redirect_uri: "http:8080/OAuth/User-Verified",
  };
  const url = "https://api.coinbase.com/oauth/token";

  return async function Post() {
    try {
      const token = await axios.post(url, values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await token;

      jwt.sign({});
    } catch (err) {
      console.log(err);
    }
  };
}

// Coinbase redirects user to this endpoint with code params
router.get("/verify", (req, res) => {
  const code = req.query.code;
  getToken(code);
  res.redirect("http://localhost:3000/User-Verified");
});

module.exports = router;
