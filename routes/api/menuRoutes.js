const router = require("express").Router();
const menusController = require("../../controllers/menuController");

// Matches with "/api/books"
router.route("/api/menus")
  .get(menusController.findAll)
  .post(menusController.create);

// Matches with "/api/books/:id"
router
  .route("/api/menus/:id")
  .get(menusController.findById)
  .put(menusController.update)
  .delete(menusController.remove);

module.exports = router;