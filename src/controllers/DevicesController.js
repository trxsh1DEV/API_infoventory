import Device from '../models/Device';

class DeviceController {
  async index(req, res) {
    // const newDevice = await Device.create(
    // {
    //   platform_so: 'Windows',
    //   name_system: 'Microsoft Windows 10 Home Single Language',
    //   hostname: 'Francisco-PC',
    //   architecture_so: 'x64',
    //   manufacturer_cpu: 'Intel',
    //   processor: 'Core™ i3-6006U',
    //   cores: 4,
    //   threads: 2,
    //   clock_cpu: '1.99 GHZ',
    // },
    // );
    const devices = await Device.findAll();
    res.json(devices);
  }
}

export default new DeviceController();
