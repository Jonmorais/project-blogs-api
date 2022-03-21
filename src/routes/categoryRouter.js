const express = require('express');

const router = express.Router();

const { createCategory } = require('../controllers/categoryController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, createCategory);

module.exports = router;
