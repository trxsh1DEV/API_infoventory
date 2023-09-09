// eslint-disable-next-line
import Sequelize, { Model } from 'sequelize';

export default class Device extends Model {
  static init(sequelize) {
    super.init({
      platform_so: Sequelize.STRING,
      name_system: Sequelize.STRING,
      hostname: Sequelize.STRING,
      architecture: Sequelize.STRING,
      manufacturer: Sequelize.STRING,
      processor: Sequelize.STRING,
      cores: Sequelize.INTEGER,
      threads: Sequelize.INTEGER,
      clock_cpu: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }
}
