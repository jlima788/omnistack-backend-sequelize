"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING
      },
      place: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING
      },
      hashtags: {
        allowNull: false,
        type: DataTypes.STRING
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING
      },
      likes: {
        defaultValue: 0,
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return queryInterface.dropTable("Posts");
  }
};
