const userRouter = require("express").Router();
const { connection, query } = require("./../helpers/mysql.init");

userRouter.post("/", async (req, res) => {});

userRouter.get("/profile", async (req, res) => {
  console.log(req.query.id);
  const response = await query("SELECT * FROM users WHERE id = ? ", [
    req.query.id,
  ]);

  const data = {
    firstName: response[0].firstName,
    lastName: response[0].lastName,
    picture: response[0].picture,
  };

  if (response[0].email != "") {
    data.email = response[0].email;
  }

  if (response[0].role == 1) {
    data.accountType = "Admin";
  } else if (response[0].role == 2) {
    data.accountType = "Moderator";
  } else if (response[0].role == 3) {
    data.accountType = "Client";
  }

  return res.status(200).send(data);
});

module.exports = userRouter;
