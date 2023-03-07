const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: {
            foreignKey: true,
            type: DataTypes.INTEGER
        },
        published: {
            type:DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated:{
            type:DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {   tableName: 'blog_posts',
        timestamps: false,
        underscored: true
    });
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User,
            {foreignKey: 'userId', as: 'user'})
    }
    return BlogPost;
};

module.exports = BlogPostModel;