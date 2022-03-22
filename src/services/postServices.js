const { Op } = require('sequelize');
const { BlogPost, Category, User } = require('../models');

const create = async ({ title, content, categoryIds, tokenData }) => {
  const category = await Category.findAll({
    attributes: ['id'],
    where: { id: { [Op.or]: categoryIds } }, 
  });

  if (category.length !== categoryIds.length) {
    return { code: 400, response: { message: '"categoryIds" not found' } }; 
  }

  const post = await BlogPost.create({
    title,
    content,
    userId: tokenData.id,
    published: new Date(),
  });

  return { code: 201, response: post.dataValues }; 
};

const getPosts = async () => {  
  const posts = await BlogPost.findAll({ include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { code: 200, response: posts };
};

module.exports = {
  create,
  getPosts,
};
