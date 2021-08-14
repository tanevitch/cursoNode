'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
        Task.belongsTo(models.User)
      }
  };
  Task.init({
    name: DataTypes.STRING,
    creationDate: DataTypes.DATE,
    expirationDate: DataTypes.DATE,
    description: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};