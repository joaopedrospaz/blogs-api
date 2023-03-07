const { Op } = require('sequelize');
const { BlogPost, User, sequelize, PostCategory, Category } = require('../models');

const getAll = async () => {
    const allPosts = await BlogPost
    .findAll({
         include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
         { model: Category, as: 'categories', through: { attributes: [] } }] });
    return { type: null, message: allPosts };
};
const getById = async (id) => {
    const post = await BlogPost
    .findByPk(id, {
         include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
         { model: Category, as: 'categories', through: { attributes: [] } }] });
         if (!post) return { type: 'NOT_FOUND', message: 'Post does not exist' };
        return { type: null, message: post };
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

const updatePost = async (id, title, content) => {
    const updated = await BlogPost.update({ title, content }, { where: { id } });
    return updated;
};
const deletePost = async (id) => {
    await BlogPost.destroy({ where: { id } });
};

const searchProduct = async (word) => {
    const search = await BlogPost
    .findAll({ where: {
        [Op.or]: {
            title: { [Op.like]: `%${word}%` },
            content: { [Op.like]: `%${word}%` },
        },
    },
include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
    { model: Category, as: 'categories', through: { attributes: [] } }] });
    return search;
};
module.exports = {
    getAll,
    createPost,
    getById,
    updatePost,
    deletePost,
    searchProduct,
};