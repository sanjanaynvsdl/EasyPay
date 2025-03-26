const Router = require("express");
const userRoutes = require('./user-routes');

const router = Router();

router.get("/",(req,res)=>{
    res.send("gtg!")
});

router.use("/user",userRoutes);


module.exports=router;

