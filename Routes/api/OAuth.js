const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Axios = require("axios");

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

// Coinbase redirects user to this endpoint with code params
// Once user is redirected back from Coinbase we retrieve the code and redirect again back to Coinbase to retrieve token

router.get("/verify", async (req, res) => {
  const code = req.query.code;
  const data = {
    grant_type: "authorization_code",
    code: code,
    client_id: process.env.OAUTH_CLIENT_ID,
    client_secret: process.env.OAUTH_SECRET,
    redirect_uri: "http://localhost:3000/User-Verified",
  };

  const config = {
    method: "post",
    url: "https://api.coinbase.com/oauth/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data,
  };
  try {
    const response = await Axios(config);
    accessToken = response.data.access_token;
    refreshToken = response.data.refresh_token;
    console.log(response.data);
    res.send({ response: response?.data });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
