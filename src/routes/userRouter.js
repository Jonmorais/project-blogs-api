const express = require('express');

const router = express.Router();

const {
  createUser,
  getAllUsers,
  getUsersById,
} = require('../controllers/userController');
const { validateUser } = require('../middlewares/userValidation');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.post('/', validateUser, createUser);
router.get('/', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUsersById);

module.exports = router;
