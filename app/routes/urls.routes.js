const router = require("express").Router();
const ShortUrlsModel = require("../models/short_urls.models");
const { getShortCode } = require("../utils/short-code-generator.utils");

router.post("/", async (req, res) => {
  const { original_url } = req.body;

  const result = await ShortUrlsModel.create({
    data: {
      original_url,
      short_code: getShortCode(),
    },
  });

  res.send({
    success: true,
    data: result,
  });
});

router.get("/:short_code", async (req, res) => {
  const { short_code } = req.params;

  const result = await ShortUrlsModel.getByCode({ short_code });

  res.redirect(result.original_url);
});

module.exports = router;
