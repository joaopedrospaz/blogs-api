const postCategoryModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        categoryId: {
            primaryKey: true,
            type: DataTypes.INTEGER
        }
    },
    {
        tableName: 'posts_categories',
        timestamps: false,
        underscored: true
    })
    PostCategory.associate = ({BlogPost, Category}) => {
        BlogPost.belongsToMany(Category, {
            as: 'category',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId'
        })
        Category.belongsToMany(BlogPost, {
            as: 'blogPost',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId'
        })
    }
    return PostCategory;
}

module.exports = postCategoryModel;