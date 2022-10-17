const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/principal", (req, res, next) => {
  res.render("principal");
});
router.get("/profile", (req, res, next) => {
  res.render("profile");
});

router.get("/signin", (req, res, next) => {
  res.render("signin")
})
router.get("/crear", (req, res, next) => {
  res.render("crear")
})

module.exports = router;
