const router = require("express").Router();
const blogRouter = require("./blog.controller");
router.get("/", async (req, res, next) => {
  try {
    const result = await blogRouter.getAll();
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
