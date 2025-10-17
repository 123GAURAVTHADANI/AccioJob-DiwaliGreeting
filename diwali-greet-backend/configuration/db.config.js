var mongoose = require("mongoose");
function dbConfig() {
  const url =
    "mongodb+srv://garvthad:123Gaurav@cluster0.yl7bq.mongodb.net/accioDB?retryWrites=true&w=majority&appName=Cluster0";
  mongoose
    .connect(url)
    .then(() => {
      console.log("db is running");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { dbConfig };
