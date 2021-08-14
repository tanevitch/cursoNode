'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          name: "Heroku",
          description: "learn to use heroku",
          creationDate: new Date(),
          expirationDate: "2021-09-01",
          UserId: 1,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "JS",
          description: "learn to use javascript",
          creationDate: "2020-12-31",
          expirationDate: "2021-02-01",
          UserId: 2,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
