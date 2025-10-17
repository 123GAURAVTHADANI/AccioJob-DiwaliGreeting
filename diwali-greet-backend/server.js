var express = require("express");
var app = express();
var cors = require("cors");
var dotenv = require("dotenv");
const { dbConfig } = require("./configuration/db.config");
const { userRouter } = require("./routers/user.router");
dotenv.config();

// middlwares
// app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.get("/hello", (req, res) => {
  res.send("Hello");
});

var PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  await dbConfig();
  console.log(`Listening to the port ${PORT}`);
});
