const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const getToken = (userId) => {
    try {
        const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "24h" });
        return token;
    } catch (error) {
        console.error('Error generating token:', error);
    }
}

module.exports = getToken;
