const userModel = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
        tableName: 'users',
        timestamps: false,
        underscored: true,
    }
    );
    user.associate = (models) => {
        user.hasMany(models.BlogPost, {
            foreignKey: 'userId', as: 'BlogPost'
        })
    }
    return user;
};

module.exports = userModel;