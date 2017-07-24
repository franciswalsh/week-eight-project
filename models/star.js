'use strict';
module.exports = function(sequelize, DataTypes) {
  var Star = sequelize.define('Star', {
    starred: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Star;
};