/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('devices', {
      // Informations SO
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      platform_so: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name_system: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hostname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      architecture_so: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      // Informations hardware
      manufacturer_device: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      model_device: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      manufacturer_motherboard: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_system: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type_device: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      interface_network: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mac_address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      virtual_machine: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      current_time: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      // Informations CPU
      manufacturer_cpu: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      processor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cores: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      threads: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      clock_cpu: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      // Informations memory RAM
      total_memory_gb: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      free_memory_gb: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      speed_ram: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      type_ram: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brand_ram: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      // Informations GPU
      manufacturer_gpu: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gpu_model: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      // Informations storage
      name_storage: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      type_storage: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      size_storage: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      freespace_storage: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('devices');
  },
};
