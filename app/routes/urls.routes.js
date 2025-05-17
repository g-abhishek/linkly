const ShortUrlsModel = require("../models/short_urls.models");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const result = await ShortUrlsModel.create({
    data: {
      original_url: "https://vincit.github.io/objection.js",
      short_code: "abc1234",
    },
  });

  res.send({
    success: true,
    data: result,
  });
});

router.get("/:slug", (req, res) => {
  const { slug } = req.params;
  res.send(`Original URL for slug=${slug}`);
});

module.exports = router;
