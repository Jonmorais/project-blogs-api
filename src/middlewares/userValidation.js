const { userSchema } = require('../services/userServices');

const validateUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const { error } = userSchema.validate({ displayName, email, password, image });

    if (error) {
      const [code, message] = await error.message.split('|');
      return res.status(code).json({ message });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validateUser,
};
