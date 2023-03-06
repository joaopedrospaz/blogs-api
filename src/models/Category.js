const CategoryModel = (sequelize, DataTypes) => {
    const category = sequelize.define('Category', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        name: DataTypes.STRING
    },
    {
        tableName: 'categories',
        timestamps: false,
        underscored: true,
    })
    return category;
}

module.exports = CategoryModel;