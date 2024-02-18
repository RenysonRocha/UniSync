'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('technical_parts', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      type: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      part_status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      part_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      manufacturer_code: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      manufacturer_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      alias_part_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vendor_part_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vendor_manufacturer_code: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      vendor_manufacturer_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      miscellaneous: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cmm_ref: {
        type: Sequelize.STRING,
        allowNull: false
      },
      splp: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      mfrp: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      spc: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      rfs: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      slc: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      tcc: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      mtbur: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      rpi: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      scr: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      mst: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      mor: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      maint_percent: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      urr: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      source: {
        type: Sequelize.STRING,
        allowNull: false
      },
      classification_source: {
        type: Sequelize.STRING,
        allowNull: false
      },
      comments: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('technical_parts');
  }
};
