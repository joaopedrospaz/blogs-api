const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER 
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: {
            foreignKey: true,
            type: DataTypes.INTEGER
        },
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },
    {   tableName: 'blog_posts',
        timestamps: true,
        underscored: true
    });
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User,
            {foreignKey: 'userId', as: 'User'})
    }
    return BlogPost;
};

module.exports = BlogPostModel;