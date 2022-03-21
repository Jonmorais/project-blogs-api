const Joi = require('joi');
const tokenGenerator = require('./jwtGenerator');
const { User } = require('../models');

const loginSchema = Joi.object({
  email: Joi.string().required().empty().messages({
  'any.required': '400|"email" is required',
  'string.empty': '400|"email" is not allowed to be empty',
  }),
  password: Joi.string().required().empty().messages({
    'any.required': '400|"password" is required',
    'string.empty': '400|"password" is not allowed to be empty',
  }),
}); 

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || password !== user.password) {
    return { code: 400, response: { message: 'Invalid fields' } }; 
  }
  const token = tokenGenerator({ id: user.id, email });
  return { code: 200, response: { token } };
};

module.exports = { 
  login,
  loginSchema,
};
