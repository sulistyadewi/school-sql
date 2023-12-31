const express = require('express')
const router = express.Router()
// const routeMapel = require("./routeMapel");
const routeStudent = require("./routeStudent");
// const routeTeacher = require("./routeTeacher");

router.get("/", (req, res) => {
  // const tes = "test"
  res.render("home");
});


router.use("/student", routeStudent);
// router.use("/teacher", routeTeacher);
// router.use("/mapel", routeMapel);

module.exports = router;
