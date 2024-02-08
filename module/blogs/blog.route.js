const router = require("express").Router();
const blogRouter = require("./blog.controller");
router.get("/", async (req, res, next) => {
  try {
    const result = await blogRouter.getall();
  } catch (e) {
    next(e);
  }
});
module.exports = router;
