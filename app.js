const express = require("express");
const app = express();
const path = require("path");

// EXPRESS REQUIREMENTS
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("APP LISTENING ON PORT 3000");
});
