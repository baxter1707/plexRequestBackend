'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
          "requests",
          "userId",
          {
            type :Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'users',
              key: 'id',
            }
          }
        )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
        'requests',
        'userId'
      )
  }
};
