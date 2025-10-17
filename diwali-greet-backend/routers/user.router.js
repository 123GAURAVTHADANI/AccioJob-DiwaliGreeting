var express = require("express");
const { UserModel } = require("../models/user.model");
var userRouter = express.Router();

userRouter.post("/createUser", (req, res) => {
  try {
    UserModel.create(req.body).then((response) => {
      res
        .status(201)
        .json({
          Message: "User is created successfully",
          Status: "success",
          data: response,
        })
        .catch((error) => {
          res.status(500).json({
            Message: "Something went Wrong",
            Status: `error ${error}`,
          });
        });
    });
  } catch (error) {
    res
      .status(500)
      .json({ Message: "Something went Wrong", Status: `error ${error}` });
  }
});

module.exports = { userRouter };
