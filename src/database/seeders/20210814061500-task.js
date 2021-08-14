'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          name: "Task 1",
          description: "learn to use heroku",
          creationDate: new Date(),
          expirationDate: new Date(parseInt("2020"),parseInt("12"),parseInt("31")),
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Task 2",
          description: "learn to use javascript",
          creationDate: new Date(),
          expirationDate: new Date(parseInt("2020"),parseInt("01"),parseInt("01")),
          UserId: 2,
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
