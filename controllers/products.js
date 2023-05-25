const Product = require('../models/product');

exports.getAllProductsStatic = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ ProductCount: products.length, data: products });
};
exports.getAllProducts = async (req, res) => {
  try {
    const { name, price, featured, creaedAt, company, sort, field } = req.query;
    query = {};
    if (name) {
      query.name = name;
    }
    // if (price) {
    // }
    if (featured) {
      query.featured = featured;
    }
    if (company) {
      query.company = company;
    }
    let result = Product.find(query);
    if (sort) {
      const sortValue = sort.split(',').join(' ');
      
      result = result.sort(sortValue);
    } else {
      result = result.sort('creaedAt');
    }
    if (field) {
      const fieldValue = field.split(',').join(' ');
      result = result.select(fieldValue);
    }
    const products = await result;
    res.status(200).json({ ProductCount: products.length, data: products });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
