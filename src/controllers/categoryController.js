const { create, getCategories } = require('../services/categoryServices');

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    const { code, response } = await create(name);

    return res.status(code).json(response);
  } catch (error) {
    next(error);
  }
};

const getAllCategories = async (req, res, next) => {
  try {
    const { code, response } = await getCategories();
    return res.status(code).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
