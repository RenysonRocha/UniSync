'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('common_mistakes', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      error_present: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      required_correction: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      verification_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      classification: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('common_mistakes');
  }
};
