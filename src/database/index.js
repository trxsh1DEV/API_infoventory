// eslint-disable-next-line
import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Device from '../models/Device';
import User from '../models/User';

const models = [Device, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
