import Device from '../models/Device';

class DeviceController {
  async index(req, res) {
    const devices = await Device.findAll();
    res.json(devices);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: ['ID inválido'] });

      const device = await Device.findByPk(id);
      if (!device) {
        return res.status(400).json({
          errors: ['Dispositivo não encontrado'],
        });
      }
      return res.json('ok');
    } catch (err) {
      return res.status(400).json({
        errors: ['Dispositivo não localizado'],
      });
    }
  }

  async store(req, res) {
    try {
      const device = await Device.create(req.body);
      return res.json(device);
    } catch (err) {
      return res.status(400).json({
        errors: ['Falha ao criar dispositivo'],
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: ['ID inválido'] });

      const device = await Device.findByPk(id);
      if (!device) {
        return res.status(400).json({
          errors: ['Dispositivo não encontrado'],
        });
      }

      const deviceUpdated = await device.update(req.body);
      console.log(deviceUpdated);
      return res.json(deviceUpdated);
    } catch (err) {
      return res.status(400).json({
        errors: ['Dispositivo não localizado'],
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: ['ID inválido'] });

      const device = await Device.findByPk(id);
      if (!device) {
        return res.status(400).json({
          errors: ['Dispositivo não encontrado'],
        });
      }
      await device.destroy();
      return res.json({
        deleted: true,
        // hostname: device.hostname,
        // mac: device.mac
      });
    } catch (err) {
      return res.status(400).json({
        errors: ['Dispositivo não localizado'],
      });
    }
  }
}

export default new DeviceController();
