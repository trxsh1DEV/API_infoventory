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
      architecture: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      // Informations CPU
      manufacturer: {
        type: Sequelize.STRING,
        allowNull: false,
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
        type: Sequelize.STRING,
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
