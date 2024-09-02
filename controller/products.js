const productModel = require("../model/productModel");

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
const createProduct = async (req, res) => {
  try {
    const newProduct = await productModel.create(req.body);
    newProduct.save();
    res.status(200).json({ newProduct });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getAllProducts, createProduct };
