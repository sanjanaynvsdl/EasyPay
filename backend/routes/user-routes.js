const Router = require('express');
const {z}=require('zod');

const userRouter = Router();

const userSchema = z.object({
    firstName:z.string(),
    lastName:z.string(),
    email:z.string().email(),
    password:z.string()
});

userRouter.get("/", (req,res)=>{
    res.send("user-routes-working!")
})



userRouter.post("/signup", (req,res)=>{
    try {

    } catch (error) {
        
    }
});

//on signin -> send a token in res.
userRouter.post("/signin", (req,res)=>{
    try {
        
    } catch (error) {
        
    }
});


//to update firstName, lastName, Password.
userRouter.put("/edit", (req,res)=>{
    try {
        
    } catch (error) {
        
    }
});

module.exports=userRouter;

