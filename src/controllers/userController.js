const {
  createNewUser,
  getUsers,
 } = require('../services/userServices');

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const { code, response } = await createNewUser(displayName, email, password, image);
    return res.status(code).json(response);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
      const { code, response } = await getUsers();
      return res.status(code).json(response);
  } catch (error) {
      next(error);
  }
};

module.exports = { 
  createUser,
  getAllUsers,
};
