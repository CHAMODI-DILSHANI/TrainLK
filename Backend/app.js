const Router = require("express").Router();
const userRouter = require("./routes/user.router");
const authRouter = require("./routes/auth.router");
const stationsRouter = require("./routes/stations.router");
const scheduleRouter = require("./routes/schedule.router");
const itemsRouter = require("./routes/items.router");
const ticketRouter = require("./routes/ticket.router");

Router.use("/users", userRouter);
Router.use("/auth", authRouter);
Router.use("/stations", stationsRouter);
Router.use("/schedules", scheduleRouter);
Router.use("/items", itemsRouter);
Router.use("/ticket", ticketRouter);

module.exports = Router;
