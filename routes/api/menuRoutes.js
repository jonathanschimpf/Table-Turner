const router = require("express").Router();
const menusController = require("../../controllers/menuController");


// matches with /api/menus

router.route("/")
  .get(menusController.findAll)
  .post(menusController.create);

// Matches with "/api/menus/:id"
router.route("/:id")
  .get(menusController.findById)
  .put(menusController.update)
  .delete(menusController.remove);

module.exports = router;