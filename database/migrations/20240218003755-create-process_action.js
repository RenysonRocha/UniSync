'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('process_action', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      action_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'actions', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      process_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'processes', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      process_action_priority: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('process_action');
  }
};
