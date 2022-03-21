const { Category } = require('../models');

const create = async (name) => {
  if (!name) {
    return { code: 400, response: { message: '"name" is required' } }; 
  }

  const category = await Category.create({ name });

  return { code: 201, response: category };
};

module.exports = {
  create,
};
