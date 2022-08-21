const authRouter = require("express").Router();
const bcrypt = require("bcrypt");
require("dotenv").config();
const jsonwebtoekn = require("jsonwebtoken");
const { err_501, err_400_s } = require("../helpers/errors");
const { connection, query } = require("./../helpers/mysql.init");

authRouter.post("/oAuth", async (req, res) => {
  const { email, firstName, lastName, externalId, oAuthProvider } = req.body;

  try {
    let response = await query(
      "SELECT * FROM users WHERE accountType = ? AND externalId = ?",
      [oAuthProvider, externalId]
    );

    let userId;

    if (response.length == 0) {
      // Register the user with this associated google account
      const response = await query(
        "INSERT INTO users(email, firstName, lastName, accountType, externalId) VALUES(?, ?, ?, ?, ?)",
        [email, firstName, lastName, oAuthProvider, externalId]
      );
      userId = response.insertId;
    } else {
      userId = response.id;
    }

    const accessToken = jsonwebtoekn.sign(
      { id: userId },
      process.env.JWT_ACCESS_TOKEN_SECRET,
      { expiresIn: "60s" }
    );
    const refreshToken = jsonwebtoekn.sign(
      { id: userId },
      process.env.JWT_REFRESH_TOKEN_SECRET,
      { expiresIn: "365d" }
    );

    return res.status(200).send({ accessToken, refreshToken });
  } catch (err) {
    console.log("<<<<<<  ERROR  >>>>>>");
    console.log(err);
    return res.status(501).send();
  }
});

module.exports = authRouter;
