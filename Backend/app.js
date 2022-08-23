const Router = require("express").Router();
const userRouter = require("./routes/user.router");
const authRouter = require("./routes/auth.router");
const stationsRouter = require("./routes/stations.router");
const scheduleRouter = require("./routes/schedule.router");

Router.use("/users", userRouter);
Router.use("/auth", authRouter);
Router.use("/stations", stationsRouter);
Router.use("/schedules", scheduleRouter);

module.exports = Router;
