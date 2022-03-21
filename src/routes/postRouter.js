const express = require('express');
const { createPost } = require('../controllers/postController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { validatePost } = require('../middlewares/validatePostCreation');

const router = express.Router();

router.post('/', authMiddleware, validatePost, createPost);

module.exports = router;