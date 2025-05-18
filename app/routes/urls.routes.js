const router = require("express").Router();
const { shortCode } = require("../common/redis");
const ShortUrlsModel = require("../models/short_urls.models");
const { getShortCode } = require("../utils/short-code-generator.utils");

router.post("/", async (req, res) => {
  const { original_url } = req.body;

  const short_code = await getShortCode();
  const result = await ShortUrlsModel.create({
    data: {
      original_url,
      short_code: short_code,
    },
  });

  await shortCode({ short_code: short_code }).set(result);

  res.send({
    success: true,
    data: result,
  });
});

router.get("/:short_code", async (req, res) => {
  const { short_code } = req.params;

  const cache = await shortCode({ short_code: short_code }).get();
  if (cache) {
    console.log("Data from cache");
    return res.redirect(cache.original_url);
  }

  const result = await ShortUrlsModel.getByCode({ short_code });

  return res.redirect(result.original_url);
});

module.exports = router;
