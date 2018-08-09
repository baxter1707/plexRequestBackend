'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    number: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    users.hasMany(models.requests,
      {
        foreignKey: 'userId',
        onDelete:'CASCADE'

      })
  };
  return users;
};
