const { City } = require("../db/models");

const router = require("express").Router();

// const { isLoggedIn, isAdmin } = require("./authentication-middleware");

module.exports = router;

router.get("/", async function(req, res, next) {
  try {
    const cities = await City.findAll({
      include: [{ all: true }]
    });
    res.json(cities);
  } catch (err) {
    next(err);
  }
});
