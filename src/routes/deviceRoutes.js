import { Router } from 'express';
import deviceController from '../controllers/DevicesController';

const router = new Router();

router.get('/', deviceController.index);

export default router;
