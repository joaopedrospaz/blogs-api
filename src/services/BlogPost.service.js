const { BlogPost, User, sequelize, PostCategory } = require('../models');

const getAll = async () => {
    const allPosts = await BlogPost
    .findAll({
         include: { model: User, as: 'user', attributes: { exclude: ['password'] } } });
    return { type: null, message: allPosts };
};

const createPost = async (userId, { title, content, categoryIds }) => {
    try {
     const result = await sequelize.transaction(async (t) => {
          const newPost = await BlogPost.create({ title, content, userId }, { transaction: t });

          const { id } = newPost;
          await Promise
          .all(categoryIds.map(async (e) => PostCategory
          .create({ postId: id, categoryId: e }, { transaction: t })));
          console.log(newPost.dataValues);
          return newPost.dataValues;
        });
        return result;
    } catch (error) {
        console.log('error', error);
    }
};

module.exports = {
    getAll,
    createPost,
};