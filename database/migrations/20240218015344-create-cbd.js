'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cbd', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      project_airframer_platform_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'project_airframer_platform', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      supplier_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'suppliers', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      part_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description_adt: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      overlength_part_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      key_word_kwd: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      optional_pnr: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      optional_supplier_code: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      technical_publication_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ata_ref: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      revision_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      spare_part_classification: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      reason_for_selection: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      shelf_life: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      renewal_procedure_code: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      periodic_check: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      periodic_check_code: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      guaranteed_mtbur: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      removal_rate_indicator: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ip_factor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      scrap_rate: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      time_cycle_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mean_shop_processing_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      existence_of_line_maintenance_parts: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      special_line_maintenance_tools: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      speacial_overhaul_tools: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      container_manufacturer: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      gross_weight: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      net_weigth: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      dimension_packed_length: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      dimension_packed_width: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      dimension_unpacked_length: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      dimension_unpacked_width: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      material_safety_data_sheet: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      electrostatic_sensitive_device_indicator: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      caution_notice_oxygen_flag: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nuclear_bact_chem_flag: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      issue_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      existence_of_shelf_life: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hazardous_material: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('cbd');
  }
};
