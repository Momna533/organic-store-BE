const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const cors = require("cors");
const signup = require("./router/signup");
const login = require("./router/login");
const products = require("./router/products");

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("db connected"))
  .catch((error) => console.log(error));

//routes
app.use("/api/v1/signup", signup);
app.use("/api/v1/login", login);
app.use("/api/v1/products", products);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
