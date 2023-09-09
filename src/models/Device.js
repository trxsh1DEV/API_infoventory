// eslint-disable-next-line
import Sequelize, { Model } from 'sequelize';

export default class Device extends Model {
  static init(sequelize) {
    super.init({
      platform_so: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [3, 50],
            msg: 'Plataforma do Sistema operacional inválida',
          },
        },
      },
      name_system: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome do Sistema operacional inválido',
          },
        },
      },
      hostname: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [3, 50],
            msg: 'Hostname do Sistema operacional inválido',
          },
        },
      },
      architecture_so: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [3, 25],
            msg: 'Arquitetura do Sistema operacional inválida',
          },
        },
      },
      manufacturer_device: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [3, 50],
            msg: 'O Fabricante do dispositivo não pode ficar vazio',
          },
        },
      },
      model_device: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'O modelo do dispositivo não pode ficar vazio',
          },
        },
      },
      manufacturer_motherboard: {
        type: Sequelize.STRING,
      },
      id_system: {
        type: Sequelize.STRING,
      },
      type_device: {
        type: Sequelize.STRING,
      },
      interface_network: {
        type: Sequelize.STRING,
      },
      mac_address: {
        type: Sequelize.STRING,
      },
      virtual_machine: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      current_time: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      manufacturer_cpu: {
        type: Sequelize.STRING,
      },
      processor: {
        type: Sequelize.STRING,
      },
      cores: {
        type: Sequelize.INTEGER,
      },
      threads: {
        type: Sequelize.INTEGER,
      },
      clock_cpu: {
        type: Sequelize.FLOAT,
      },
      total_memory_gb: {
        type: Sequelize.FLOAT,
      },
      free_memory_gb: {
        type: Sequelize.FLOAT,
      },
      speed_ram: {
        type: Sequelize.FLOAT,
      },
      type_ram: {
        type: Sequelize.STRING,
      },
      brand_ram: {
        type: Sequelize.STRING,
      },
      manufacturer_gpu: {
        type: Sequelize.STRING,
      },
      gpu_model: {
        type: Sequelize.STRING,
      },
      name_storage: {
        type: Sequelize.STRING,
      },
      type_storage: {
        type: Sequelize.STRING,
      },
      size_storage: {
        type: Sequelize.FLOAT,
      },
      freespace_storage: {
        type: Sequelize.FLOAT,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    }, {
      sequelize,
    });
    return this;
  }
}
