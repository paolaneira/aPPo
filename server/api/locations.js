const { Location } = require("../db/models");

const router = require("express").Router();

// const { isLoggedIn, isAdmin } = require("./authentication-middleware");

module.exports = router;

router.get("/", async function(req, res, next) {
  try {
    const locations = await Location.findAll({
      include: [{ all: true }]
    });
    res.json(locations);
  } catch (err) {
    next(err);
  }
});
