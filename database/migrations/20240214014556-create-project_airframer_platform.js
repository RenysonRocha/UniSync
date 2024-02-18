'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('project_airframer_platform', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      project_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'projects', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      airframer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'airframers', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      platform_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'platforms', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
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
    await queryInterface.dropTable('project_airframer_platform');
  }
};
