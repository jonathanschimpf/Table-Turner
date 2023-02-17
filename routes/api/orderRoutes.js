const router = require("express").Router();
const orderController = require("../../controllers/orderController");

// Matches with "/api/orders"
router.route("/")
  .get(orderController.findAll)
  .post(orderController.create);

// Matches with "/api/order/:id"
router.route("/:id")
  .get(orderController.findById)
  .put(orderController.update)
  .delete(orderController.remove)




module.exports = router;