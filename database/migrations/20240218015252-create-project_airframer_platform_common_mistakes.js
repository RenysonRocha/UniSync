'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('project_airframer_platform_common_mistakes', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      common_mistakes_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'common_mistakes', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      project_airframer_platform_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'project_airframer_platform', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('project_airframer_platform_common_mistakes');
  }
};
