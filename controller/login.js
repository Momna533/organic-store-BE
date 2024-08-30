const loginModel = require("../model/loginModel");
const signupModel = require("../model/signupModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const signupUsers = await signupModel.find({});

    const user = signupUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user.id }, "secret_key", {
      expiresIn: "1h",
    });

    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }

  // Compare password
  // const isMatch = await bcrypt.compare(password, user.password);
  // if (!isMatch) {
  //   return res.status(400).json({ message: "Invalid credentials" });
  // }
};

module.exports = { createUser };
