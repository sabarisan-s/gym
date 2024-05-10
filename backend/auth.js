const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const headerAuth = req.headers["authorization"];
    const token = headerAuth.split(" ")[1];
    console.log(token);
    const user = jwt.verify(token, process.env.SECRET_KEY);
    req.user = user;
    next();
};
module.exports = auth;
