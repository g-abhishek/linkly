const fs = require("fs");

function router(app) {
  const files = fs.readdirSync(__dirname);
  const routeFiles = files.filter((f) => f.includes("routes.js"));

  routeFiles.forEach((file) => {
    const fileRouteName = file.split(".")[0];
    app.use(`/${fileRouteName}`, require(`./${file}`));
  });
}

module.exports = router;
