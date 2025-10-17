var express = require("express");
var app = express();

var dotenv = require("dotenv");
dotenv.config();

// middlwares
app.use(cors());

app.use("/api/v1/user", userRouter);

var PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});
