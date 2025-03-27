const Router = require('express');
const { z } = require('zod');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/auth-middleware');

const userRouter = Router();

const signUpSchema = z.object({
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string().min(6, "Password must be atleast 6 characters.")
});


const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be atleast 6 characters.")
});


const updateUserSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    password: z.string().min(6, "Password must be atleast 6 characters.").optional(),
})


userRouter.post("/signup", async (req, res) => {
    try {
        const validateInp = signUpSchema.safeParse(req.body);
        const userData = req.body;

        // { validateInp : success, data, error }

        if (!validateInp.success) {
            return res.status(411).json({
                message: "Invalid Inputs!"
            })
        }

        const findUser = await User.findOne({
            email: userData.email
        });

        //handle duplicate users
        if (findUser) {
            return res.status(409).json({
                message: "email already exists!"
            });
        }

        //hash pass and store
        const hashedPass = await bcrypt.hash(userData.password, 10);
        console.log(`Hashed pass : ${hashedPass}`);

        const newUser = await User.create({
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            password: hashedPass,
        });

        if (newUser) {
            const secret_key = process.env.JWT_SECRET_KEY;
            const token = jwt.sign({ userId: newUser._id }, secret_key);

            console.log("created user and token : " + newUser + " token is " + token);
            return res.status(200).json({
                message: "User created successfully!",
                token: token,
            })
        }

        return res.status(500).json({
            message: "Error while creating user!"
        })

    } catch (error) {
        console.error("Error in signup functionality : " + error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
});

//on signin -> send a token in res.
userRouter.post("/signin", async (req, res) => {
    try {
        const validateInp =  signInSchema.safeParse(req.body);
        const userData = req.body;

        if (!validateInp.success) {
            return res.status(411).json({
                message: "Invalid inputs!"
            })
        }

        const existingUser = await User.findOne({
            email: userData.email
        });

        if (!existingUser) {
            return res.status(404).json({
                message: "User not found, Please Sign up!"
            })
        }
        // console.log(existingUser.password + " hased pass!")
        const decodePass = await bcrypt.compare(userData.password, existingUser.password);

        if (!decodePass) {
            return res.status(411).json({
                message: "Incorrect password!"
            })
        }

        const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET_KEY);

        return res.status(200).json({
            messge: "Logged in successfully!",
            token: token,
        });


    } catch (error) {
        console.error("Error in signin functionality : " + error);
        return res.status(500).json({
            message: "Internal server error!",
            error: error.message
        })
    }
});


//to update firstName, lastName, Password.
userRouter.put("/", authMiddleware, async (req, res) => {
    try {
        const validateInp = updateUserSchema.safeParse(req.body);
        const userData = req.body;

        const updatedBody={};

        if(userData.firstName) {
            updatedBody.firstNamae = userData.firstNamae
        }

        if(userData.lastName) {
            updatedBody.lastName = userData.lastName
        }

        if(userData.password) {
            const hashedPass = await bcrypt.hash(userData.password,10);
            updatedBody.password = hashedPass
        }

        if (!validateInp.success) {
            return res.status(411).json({
                message: "Invalid input"
            })
        }

        // console.log(userData);

        const updatedUser = await User.findByIdAndUpdate({_id: req.userId},updatedBody);

        if (updatedUser) {
            return res.status(200).json({
                message: "User updated successfully!"
            });
        }
        return res.status(404).json({
            message: "User not found!"
        })

    } catch (error) {
        console.error("Error in update user functionality " + error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
});

module.exports = userRouter;

