const jwt = require('jsonwebtoken');


async function authMiddleware(req, res, next) {
    try {

        const token = req.headers.token;
        if (!token) {
            return res.status(403).json({
                message: "No token provided."
            });
        }

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (verifyToken) {
            req.userId = verifyToken.userId;
            next();
        } else {
            return res.status(500).json({
                message: "Token verification failed!"
            });
        }

    } catch (error) {
        console.error("Error in auth middleware functionality " + error);
        return res.status(500).json({
            message: "Internal server error!",
            error: error.message
        });
    }
}

module.exports=authMiddleware;