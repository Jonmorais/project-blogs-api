const postServices = require('../services/postServices');

const createPost = async (req, res, next) => {
  try {
    const { tokenData } = req;
  
    const { title, content, categoryIds } = req.body;
    const { code, response } = await postServices.create({
      title,
      content,
      categoryIds,
      tokenData,
    });

    return res.status(code).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
};