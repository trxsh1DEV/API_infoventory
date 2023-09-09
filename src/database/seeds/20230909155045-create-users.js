const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Doe',
          email: 'john.mail.com',
          password_hash: await bcrypt.hash('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Luiz Doe',
          email: 'luiz.mail.com',
          password_hash: await bcrypt.hash('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Jorge Doe',
          email: 'jorge.mail.com',
          password_hash: await bcrypt.hash('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  // async down(queryInterface, Sequelize) {},
};
