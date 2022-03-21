const express = require('express');

const router = express.Router();

const { createCategory, getAllCategories } = require('../controllers/categoryController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, createCategory);
router.get('/', authMiddleware, getAllCategories);

module.exports = router;
