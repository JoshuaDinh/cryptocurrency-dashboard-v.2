const express = require("express");

const path = require("path");

// initialize app config
const app = express();
const port = process.env.PORT || 8080;

// Init Middleware
app.use(express.json({ extended: false }));

app.use("/api/user", userRoute);

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
