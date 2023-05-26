const Product = require('../models/product');

exports.getAllProductsStatic = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ ProductCount: products.length, data: products });
};
exports.getAllProducts = async (req, res) => {
  try {
    const { name, featured, company, sort, field, limit, numericFilter } = req.query;
    const page = Number(req.query.page) || 1;
    const limitValue = Number(req.query.limit) || 10;
    const skip = (page - 0) * limit;
    let result;
    query = {};

    if (name) {
      query.name = name;
    }
    if (numericFilter) {
      const operatorMap = {
        '>': '$gt',
        '>=': '$gte',
        '=': '$eq',
        '<': '$lt',
        '<=': '$lte',
      };
      const regex = /\b(<|<=|=|>|>=)\b/g;
      let filters = numericFilter.replace(regex, (match) => `-${operatorMap[match]}-`);
      const options = ['price', 'rating'];
      let queryObject = {};
      filters = filters.split(',').forEach((item) => {
        const [field, operator, value] = item.split('-');
        if (options.includes(field)) {
          query[field] = { [operator]: Number(value) };
        }
      });
      console.log(query);
    }
    if (featured) {
      query.featured = featured;
    }
    if (company) {
      query.company = company;
    }
    if (query) {
    }
    result = Product.find(query);
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
    if (limit) {
      result = result.skip(skip).limit(limitValue);
    }
    const products = await result;
    res.status(200).json({ ProductCount: products.length, data: products });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
