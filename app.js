const express = require("express");
const app = express();
const port = 3005;
// const { student, teacher, mapel } = require("./readData");
const router = require("./routes/index")

app.set("view engine", "ejs");

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  // const tes = "test"
  res.render("home");
});

app.use(router)
// app.use(express.static("public"));

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
