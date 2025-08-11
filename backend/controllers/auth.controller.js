const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Auth = require("../models/auth.model.js");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

const expiryDate = 3 * 24 * 60 * 60; // global expiryDate to be accessed in any function
const userToken = (id) => {
  // create token for user with specific id
  return jwt.sign({ id }, "myJWT", {
    expiresIn: expiryDate,
  });
};

const logIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await Auth.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "No user found with this email" });
    }

    // compare the passwords and then let user to login or not
    const matching = await bcrypt.compare(password, existingUser.password);
    if (!matching) {
      return res
        .status(400)
        .json({ message: "Incorrect password, Try again!" });
    }

    // call the function that creates the token
    const token = userToken(existingUser._id);

    res.cookie("jwt", token, { httpOnly: true, maxAge: expiryDate * 1000 });

    // you must rename password or else you will get reference error
    const { password: hashed, ...userDataWithoutPassword } = existingUser._doc
    res
      .status(201)
      .json({ message: "Logged in successfully", data: userDataWithoutPassword });
  } catch (error) {
    console.log("Failed to login, please try again!");
  }
};

const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // hash the password first
    const salt = await bcrypt.genSalt(); // generate salt
    const hashedPassword = await bcrypt.hash(password, salt); // hash the password

    // create a new user and save the data to the database
    const newUser = await Auth.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = userToken(newUser._id);

    res.cookie("jwt", token, { maxAge: expiryDate * 1000 });

    // for better security send the users data without the password
    const { password: hashed, ...userWithoutPassword } = newUser._doc;

    res
      .status(201)
      .json({ message: "User created successfully", data: userWithoutPassword });
  } catch (error) {
    console.log("Failed to create a new user", error);
  }
};

module.exports = {
  logIn,
  signUp,
};
