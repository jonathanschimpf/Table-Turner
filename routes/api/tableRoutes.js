const router = require("express").Router();
const tableController = require("../../controllers/tableController");



// Matches with "/api/tables"
router.route("/:id")
  .delete(tableController.deleteMany);

module.exports = router;