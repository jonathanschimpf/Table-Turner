const router = require("express").Router();
const menuRoutes = require("./menuRoutes");

// Menu routes //
router.use("/menus", menuRoutes);

module.exports = router;