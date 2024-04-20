const jwt = require("jsonwebtoken");

const authenticate = (req, res, next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);
    console.log("Request Headers:", req.headers);
    if(!token){
        return res.status(401).json("No token provided!.");
    }

    try {
        const decoded = jwt.verify(token,process.env.SECRET_KEY);

        req.user = decoded;

        next();
    } catch (error) {
        console.error("Error occured during authenticating the user:", error);
    }
}

module.exports = authenticate;