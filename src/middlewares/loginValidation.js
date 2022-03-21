const { loginSchema } = require('../services/loginServices');

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate({ email, password });

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }
  return next();
};

module.exports = {
  validateLogin,
};
