const router = require("express").Router();
const menuRoutes = require("./menuRoutes");

// Book routes
router.use("/menus", menuRoutes);

module.exports = router;