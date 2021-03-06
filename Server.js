const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const Oauth = require("./Routes/api/OAuth");
const User = require("./Routes/api/User");
require("dotenv").config();

// initialize app config
const app = express();
const port = process.env.PORT || 8080;

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/api/OAuth", Oauth);
app.use("/api/User", User);

// Static assets - production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
