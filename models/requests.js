'use strict';
module.exports = (sequelize, DataTypes) => {
  var requests = sequelize.define('requests', {
    title: DataTypes.STRING,
    year: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  requests.associate = function(models) {
    requests.belongsTo(models.users,
      {
        foreignKey: 'id',
        onDelete:'CASCADE'

      })
  };
  return requests;
};
