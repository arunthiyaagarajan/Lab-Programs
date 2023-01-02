const express = require("express");
const apps = express();
apps.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
apps.listen(3000, function () {
  console.log("Server is running on localhost3000");
});
