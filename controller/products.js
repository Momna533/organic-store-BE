const productModel = require("../model/productModel");

const getAllProducts = async (req, res) => {
  const { name } = req.query;
  const queryObject = {};
  if (name) {
    queryObject.name = new RegExp(name, "i");
  }
  try {
    const products = await productModel.find(queryObject).sort("name -price");

    res.status(200).json({ nbHits: products.length, products });
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
