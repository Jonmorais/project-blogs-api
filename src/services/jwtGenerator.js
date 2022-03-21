require('dotenv').config();

const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

const SECRET = process.env.JWT_SECRET;

module.exports = (data = {}) => jwt.sign({ data }, SECRET, jwtConfig);
