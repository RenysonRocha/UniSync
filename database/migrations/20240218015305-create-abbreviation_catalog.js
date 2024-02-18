'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('abbreviation_catalog', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      abbreviation:{
        type:Sequelize.STRING,
        allowNull: false
      },
      standard_abbreviation:{
        type:Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('abbreviation_catalog');
  }
};
