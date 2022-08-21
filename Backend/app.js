const Router = require("express").Router();
const userRouter = require("./routes/user.router");
const authRouter = require("./routes/auth.router");

Router.use("/users", userRouter);
Router.use("/auth", authRouter);

module.exports = Router;
