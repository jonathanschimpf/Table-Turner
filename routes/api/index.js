const router = require("express").Router();
const menuRoutes = require("./menuRoutes");
const orderRoutes = require("./orderRoutes");
const tableRoutes = require("./tableRoutes");

// Menu routes //
router.use("/menus", menuRoutes);
router.use("/orders", orderRoutes);
router.use("/table", tableRoutes);
module.exports = router;