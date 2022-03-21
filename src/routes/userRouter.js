const express = require('express');

const router = express.Router();

const { createUser, getAllUsers } = require('../controllers/userController');
const { validateUser } = require('../middlewares/userValidation');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.post('/', validateUser, createUser);
router.get('/', authMiddleware, getAllUsers);

module.exports = router;
