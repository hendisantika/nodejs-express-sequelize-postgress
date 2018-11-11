'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};

User.associate = function (models) {
    User.hasOne(models.Profile, {
        foreignKey: 'user_id',
        as: 'profile',
    });
};