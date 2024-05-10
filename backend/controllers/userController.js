const bcryptjs = require("bcryptjs");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const userPostSignup = async (req, res) => {
    const { name, phone, email, password } = req.body;
    if (!name || !phone || !email || !password) {
        return res
            .status(400)
            .json({ error: true, message: "Fill * required" });
    }

    const phonePattern = /^[\d]{10}$/;
    if (!phonePattern.test(phone)) {
        return res
            .status(400)
            .json({ error: true, message: "Phone not valid" });
    }

    const emailPattern = /^[\w]+@[\w]+.[\w]+$/;
    if (!emailPattern.test(email)) {
        return res
            .status(400)
            .json({ error: true, message: "Email wrong pattern" });
    }

    const checkEmail = await userModel.findOne({ email });
    if (checkEmail) {
        return res
            .status(400)
            .json({ error: true, message: "Email already taken" });
    }

    if (password.length < 8) {
        return res
            .status(400)
            .json({ error: true, message: "password min 8 character" });
    }

    const genSalt = await bcryptjs.genSalt(9);
    const hashedPassword = await bcryptjs.hash(password, genSalt);
    const user = await userModel.create({
        ...req.body,
        password: hashedPassword,
    });
    const token = jwt.sign({ user }, process.env.SECRET_KEY);
    res.status(201).json({
        user,
        token,
        error: false,
        message: "SignUp successful!",
    });
};
const userPostLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res
            .status(400)
            .json({ error: true, message: "Fill * required" });
    }

    const emailPattern = /^[\w]+@[\w]+.[\w]+$/;
    if (!emailPattern.test(email)) {
        return res
            .status(400)
            .json({ error: true, message: "Email wrong pattern" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: true, message: "User not found" });
    }

    const checkPassword = await bcryptjs.compare(password, user.password);
    if (!checkPassword) {
        return res.status(400).json({ error: true, message: "Wrong password" });
    }
    const token = jwt.sign({ user }, process.env.SECRET_KEY);
    res.status(201).json({
        user,
        token,
        error: false,
        message: "Login Successful!",
    });
};

const userGetUser = async (req, res, next) => {
    const { user } = req.user;
    console.log(user);
    const isUser = await userModel.findOne({ _id: user._id });
    if (!isUser) {
        return res
            .status(401)
            .json({ error: true, message: " User not found " });
    }
    res.json({ user, error: false, message: "" });
};
module.exports={
    userPostSignup,userPostLogin,userGetUser
}