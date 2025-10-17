var mongoose = require("mongoose");
var validator = require("validator");
let userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Kindly Input the first Name"],
  },
  lastName: {
    type: String,
    required: [true, "Kindly Input the last Name"],
  },
  email: {
    type: String,
    required: [true, "Kindly Input the Email"],
    unique: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email address",
    },
  },
  password: {
    type: String,
    required: [true, "Kindly Provide the password"],
  },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = { UserModel };

// sat  ; backend (); Frontend (Greeting)
