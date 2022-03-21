const { login } = require('../services/loginServices');

const createLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { code, response } = await login(email, password);

    return res.status(code).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createLogin,
};
