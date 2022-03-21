const express = require('express');

const router = express.Router();

const { createLogin } = require('../controllers/loginController');
const { validateLogin } = require('../middlewares/loginValidation');

router.post('/', validateLogin, createLogin);

module.exports = router;