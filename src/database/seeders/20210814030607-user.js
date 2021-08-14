'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {         
          firstName: "Juan",
          lastName: "Perez",
          phone: "221-111-1111",
          email: "juan@perez.com",
          password: bcrypt.hashSync('123456', 8),
          username:"juanperez",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Maria",
          lastName: "Lopez",
          phone: "221-111-1111",
          email: "maria@lopez.com",
          password: bcrypt.hashSync('123456', 8),
          username:"marialopez",          
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
