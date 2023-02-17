const router = require("express").Router();
const menuRoutes = require("./menuRoutes");
const orderRoutes = require("./orderRoutes");
const tableRoutes = require("./tableRoutes");
const isAuthenticated = require('../isAuthenticated');


// Route is /api

router.use("/menus", isAuthenticated, menuRoutes);
router.use("/orders", isAuthenticated, orderRoutes);
router.use("/tables", isAuthenticated, tableRoutes);

module.exports = router;