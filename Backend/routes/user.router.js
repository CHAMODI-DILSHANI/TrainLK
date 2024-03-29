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

userRouter.post("/moderator", async (req, res) => {
  const result = await moderatorRequests(req.body);
  res.send(result);
});

userRouter.get("/moderator", async (req, res) => {
  const result = await getModeratorRequests();
  res.send(result);
});

userRouter.get("/all", async (req, res) => {
  const result = await getAllUsers();
  res.send(result);
});

async function moderatorRequests(data) {
  try {
    const result = await query(
      "insert into moderatorrequest values (?,?,?,?,?,?,?)",
      [
        data.userID,
        data.contactNo,
        data.nic,
        data.frontImage,
        data.backImage,
        data.travelFrequency,
        data.railwayLine,
      ]
    );
    return result;
  } catch (e) {
    return e;
  }
}

async function getModeratorRequests() {
  try {
    const result = await query(
      "select u.id,firstName,lastName,email,picture,contactNo,nic,frontImage,backImage,travelFrequency,railwayLine from users u join moderatorrequest m on u.id = m.userID"
    );
    return result;
  } catch (e) {
    return e;
  }
}

async function getAllUsers() {
  try {
    const result = await query(
      "select id,firstName,lastName,email,role,picture from users"
    );
    const resultWithMod = await Promise.all(
      result.map(async i => {
        const val = await getModeratorDetails(i.id);
        // console.log(val.length);
        if (val.length != 0) {
          i.modReq = val;
        }
      })
    );
    return result;
  } catch (e) {
    return e;
  }
}

async function getModeratorDetails(userID) {
  try {
    const result = await query(
      "select * from moderatorrequest where userID =?",
      [userID]
    );
    return result;
  } catch (e) {
    return e;
  }
}
userRouter.get("/test", (req, res) => {
  connection.beginTransaction(err => {
    if (err) {
      throw err;
    }
    connection.query("FIRST QUERY", (err, result) => {
      if (err) {
        connection.rollback(err => {
          throw err;
        });
      }

      connection.query("SECOND QUERY", (err, result) => {
        if (err) {
          connection.rollback(err => {
            throw err;
          });
        }

        connection.commit(err => {
          if (err) {
            connection.rollback(err => {
              throw err;
            });
          }
        });
      });
    });
  });

  //
});

module.exports = userRouter;
