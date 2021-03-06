'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Snippets',
      'userId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'Snippets',
      'userId'
    )
  }
};
