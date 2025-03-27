const Router = require("express");
const userRoutes = require('./user-routes');
const accRoutes = require('./account-routes');

const router = Router();
router.use("/user",userRoutes);
router.use("/account",accRoutes);


module.exports=router;

