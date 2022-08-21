const express = require("express");
const dotenv = require("dotenv");
const Router = require("./app");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
app.use(cookieParser());

app.use("/api/v1", Router);

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log(`server lisetening on port ${PORT}`);
});
