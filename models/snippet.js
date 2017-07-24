'use strict';
module.exports = function(sequelize, DataTypes) {
  var Snippet = sequelize.define('Snippet', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    language: DataTypes.STRING,
    tags: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Snippet;
};