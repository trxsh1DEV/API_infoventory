import { Router } from 'express';
import postController from '../controllers/PostController';

const router = new Router();

router.post('/', postController.store);

export default router;
