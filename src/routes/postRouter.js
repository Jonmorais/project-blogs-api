const express = require('express');
const { createPost, getAllPosts } = require('../controllers/postController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { validatePost } = require('../middlewares/validatePostCreation');

const router = express.Router();

router.post('/', authMiddleware, validatePost, createPost);
router.get('/', authMiddleware, getAllPosts);

module.exports = router;