'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('project_airframer_platform_process', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      project_airframer_platform_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      process_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      process_priority: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('project_airframer_platform_process');
  }
};
