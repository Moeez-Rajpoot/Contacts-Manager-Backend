const asynchandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validate = asynchandler(async (req, res, next) => {
    let token;
    let headerToken = req.headers.authorization;

    if (headerToken && headerToken.startsWith("Bearer")) {
        token = headerToken.split(" ")[1];

        if (!token) {
            res.status(401);
            throw new Error("Token Not Found");
        }

        try {
            const decoded = jwt.verify(token, process.env.ACCESSTOKEN);
            req.user = decoded.user;
            next();
        } catch (err) {
            if (err.name === 'TokenExpiredError') {
        
                res.status(401).json({ message: 'Token expired' });
            } else {
        
                res.status(401).json({ message: 'Invalid token' });
            }
        }
    } else {
        res.status(401);
        throw new Error("Authorization header not provided or malformed");
    }
});



module.exports = validate;