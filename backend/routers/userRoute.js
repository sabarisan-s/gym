const express = require("express");
const router = express.Router();
const auth = require("../auth");
const {
    userPostSignup,
    userPostLogin,
    userGetUser,
} = require("../controllers/userController");

router.post("/signup", userPostSignup);

router.post("/login", userPostLogin);

router.get("/user", auth, userGetUser);
module.exports = router;
