'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('project_airframer_platform_process_action', { 
      id: 
        {type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        project_airframer_platform_process_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'project_airframer_platform_process', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        process_action_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'process_action', key: 'id'},
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
    await queryInterface.dropTable('project_airframer_platform_process_action');
  }
};
