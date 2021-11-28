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
router.get("/lol", (req, res) => {
  try {
    console.log(req.cookies);
  } catch (err) {
    console.log(err);
  }
});

// Coinbase redirects user to this endpoint with code params
// Once user is redirected back from Coinbase we retrieve the code and redirect again back to Coinbase to retrieve token

router.get("/verify", async (req, res) => {
  const { code } = req.query;

  const data = {
    grant_type: "authorization_code",
    code: code,
    client_id: process.env.OAUTH_CLIENT_ID,
    client_secret: process.env.OAUTH_SECRET,
    redirect_uri: process.env.OAUTH_REDIRECT,
  };

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    const response = await axios.post(
      `https://api.coinbase.com/oauth/token?grant_type=authorization_code&code=${code}&client_id=${process.env.OAUTH_CLIENT_ID}&client_secret=${process.env.OAUTH_SECRET}&redirect_uri=${process.env.OAUTH_REDIRECT}`
    );

    // const response = await axios.post(
    //   "https://api.coinbase.com/oauth/token",
    //   null,
    //   {
    //     params: data,
    //   }
    // );

    accessToken = response.data.access_token;
    refreshToken = response.data.refresh_token;
    // res.send({ response: response?.data });
    console.log(response);
    res.cookie(accessToken, refreshToken, { httpOnly: true, secure: false });
    res.redirect("http://localhost:3000/User-Verified");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
