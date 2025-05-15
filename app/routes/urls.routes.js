const router = require("express").Router();

router.post("/", (req, res) => {
  res.send("Shorten URL Created Susscessfully");
});

router.get("/:slug", (req, res) => {
  const { slug } = req.params;
  res.send(`Original URL for slug=${slug}`);
});

module.exports = router;
