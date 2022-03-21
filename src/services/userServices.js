const Joi = require('joi');
const { User } = require('../models');
const tokenGenerator = require('./jwtGenerator');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'any.required': '400|"displayName" is required',
    'string.base': '400|"displayName" must be a string',
    'string.min': '400|"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
    'any.required': '400|"email" is required',
    'string.base': '400|"email" must be a string',
    'string.email': '400|"email" must be a valid email',
  }),
  password: Joi.string().length(6).required().messages({
    'any.required': '400|"password" is required',
    'string.base': '400|"password" must be a string',
    'string.length': '400|"password" length must be 6 characters long',
  }),
  image: Joi.string().messages({
    'string.base': '400|"image" must be a string',
  }),
});

const createNewUser = async (displayName, email, password, image) => {
  const registeredUser = await User.findOne({ where: { email } });

  if (registeredUser) {
    return { code: 409, response: { message: 'User already registered' } };
  }

  const newUser = await User.create({ displayName, email, password, image });
  const token = tokenGenerator({ id: newUser.id, email });

  return { code: 201, response: { token } };
};

const getUsers = async () => {  
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return { code: 200, response: users };
};

const getById = async (userId) => {
  const user = await User.findOne({
    where: { id: userId },
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    return { code: 404, response: { message: 'User does not exist' } }; 
  }

  return { code: 200, response: user };
};

module.exports = { 
  createNewUser,
  userSchema,
  getUsers,
  getById,
};
