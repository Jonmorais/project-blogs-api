const { Op } = require('sequelize');
const { BlogPost, Category } = require('../models');

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

module.exports = {
  create,
};
