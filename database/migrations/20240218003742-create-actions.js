'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('actions', { 
      id: {
        type:Sequelize.INTEGER ,
        primaryKey: true,
        autoincrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('actions');
  }
};
