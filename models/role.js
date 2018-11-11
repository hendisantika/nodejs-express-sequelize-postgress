'use strict';
module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        role_name: DataTypes.STRING
    }, {});
    Role.associate = function (models) {
        // associations can be defined here
    };
    return Role;
};

Role.associate = function (models) {
    Role.belongsToMany(models.User, {
        through: 'UserRole',
        as: 'users',
        foreignKey: 'role_id'
    });
};