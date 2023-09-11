import { Router } from 'express';
import deviceController from '../controllers/DevicesController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, deviceController.index);
router.get('/:id', loginRequired, deviceController.show);
router.post('/', loginRequired, deviceController.store);
router.put('/:id', loginRequired, deviceController.update);
router.delete('/:id', loginRequired, deviceController.delete);

export default router;
