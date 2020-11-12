const router = require("express").Router();
const tableController = require("../../controllers/tableController");



// Matches with "/api/table/:id"
router.route("/:id")
  .delete(tableController.deleteMany);

module.exports = router;