import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import postRoutes from './src/routes/postRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/devices/', postRoutes);
  }
}

export default new App().app;
