const Product = require('../models/product');

exports.getAllProductsStatic = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ ProductCount: products.length, data: products });
};
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(req.query);
    res.status(200).json({ ProductCount: products.length, data: products });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
