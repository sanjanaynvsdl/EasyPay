const Router = require('express');
const Account = require('../models/account');
const authMiddleware = require('../middlewares/auth-middleware');
const { default: mongoose } = require('mongoose');



const accRouter = Router();

accRouter.get("/balance", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;

        const userAccount = await Account.findOne({
            userId: userId
        });

        return res.status(200).json({
            balance: userAccount.balance,
        })

    } catch (error) {
        console.error("Error while fetching user balance : " + error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
});

//transfer money to another account.
//.session(session) make sures all the db calls are of a particular transaction
//if anything fails, session.abortTransaction() will undo all changes,

accRouter.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    try {

        session.startTransaction();
        const { to, amount } = req.body;
        const userId = req.userId;

        const account = await Account.findOne({
            userId: userId
        }).session(session);

        if (account.balance < amount) {
            await session.abortTransaction();
            return res.status(411).json({
                message: "Invalid balance",
            })
        }

        const toAccount = await Account.findOne({
            userId: to,
        }).session(session);

        if (!toAccount) {
            await session.abortTransaction();
            return res.status(404).json({
                message: "Account not found!"
            });
        }

        await Account.updateOne({
            userId: userId
        }, {
            $inc: { balance: -amount }
        }).session(session);

        await Account.updateOne({
            userId: to,
        }, {
            $inc: { balance: amount }
        }).session(session);

        await session.commitTransaction();

        return res.status(200).json({
            message: "Transaction successfull"
        });



    } catch (error) {
        console.error("Error in transfer route : " + error);
        await session.abortTransaction();
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
})

module.exports = accRouter;