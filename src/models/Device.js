// eslint-disable-next-line
import Sequelize, { Model } from 'sequelize';

export default class Device extends Model {
  static init(sequelize) {
    super.init({
      platform_so: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'O modelo do dispositivo não pode ficar vazio',
          },
        },
      },
      name_system: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'O modelo do dispositivo não pode ficar vazio',
          },
        },
      },
      hostname: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'O modelo do dispositivo não pode ficar vazio',
          },
        },
      },
      architecture_so: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'O modelo do dispositivo não pode ficar vazio',
          },
        },
      },
      manufacturer_device: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'O modelo do dispositivo não pode ficar vazio',
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
        validate: {
          notEmpty: {
            msg: 'O modelo do dispositivo não pode ficar vazio',
          },
        },
      },
      id_system: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'O modelo do dispositivo não pode ficar vazio',
          },
        },
      },
      type_device: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'O modelo do dispositivo não pode ficar vazio',
          },
        },
      },
      interface_network: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'O modelo do dispositivo não pode ficar vazio',
          },
        },
      },
      mac_address: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'O modelo do dispositivo não pode ficar vazio',
          },
        },
      },
      virtual_machine: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      current_time: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        validate: {
          isDate: {
            msg: 'Formato de data inválido',
          },
        },
      },
      manufacturer_cpu: {
        type: Sequelize.STRING,
      },
      processor: {
        type: Sequelize.STRING,
      },
      cores: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: {
            msg: 'Formato inválido (Not Integer)',
          },
        },
      },
      threads: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: {
            msg: 'Formato inválido (Not Integer)',
          },
        },
      },
      clock_cpu: {
        type: Sequelize.FLOAT,
        validate: {
          isFloat: {
            msg: 'Formato inválido (Not Float)',
          },
        },
      },
      total_memory_gb: {
        type: Sequelize.FLOAT,
        validate: {
          isFloat: {
            msg: 'Formato inválido (Not Float)',
          },
        },
      },
      free_memory_gb: {
        type: Sequelize.FLOAT,
        validate: {
          isFloat: {
            msg: 'Formato inválido (Not Float)',
          },
        },
      },
      speed_ram: {
        type: Sequelize.FLOAT,
        validate: {
          isFloat: {
            msg: 'Formato inválido (Not Float)',
          },
        },
      },
      type_ram: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'Tipo de RAM não pode ficar vazio',
          },
        },
      },
      brand_ram: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'Não pode ficar vazio',
          },
        },
      },
      manufacturer_gpu: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'Não pode ficar vazio',
          },
        },
      },
      gpu_model: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'Não pode ficar vazio',
          },
        },
      },
      name_storage: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'Não pode ficar vazio',
          },
        },
      },
      type_storage: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'Não pode ficar vazio',
          },
        },
      },
      size_storage: {
        type: Sequelize.FLOAT,
        validate: {
          isFloat: {
            msg: 'Formato inválido (Not Float)',
          },
        },
      },
      freespace_storage: {
        type: Sequelize.FLOAT,
        validate: {
          isFloat: {
            msg: 'Formato inválido (Not Float)',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
