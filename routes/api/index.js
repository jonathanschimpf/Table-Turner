const router = require("express").Router();
const menuRoutes = require("./menuRoutes");
const orderRoutes = require("./orderRoutes");
// Menu routes //
router.use("/menus", menuRoutes);
router.use("/orders", orderRoutes);
module.exports = router;