import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userController.index);
router.get('/:id', loginRequired, userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.updated);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index > lista todos os dados > GET
store/create > cria um novo dado > POST
delete > apaga algum dado > DELETE
show > Exibe um dado > GET
update > Atualiza um dado > PATCH ou PUT
(PATCH atualiza somente um(s) campo(s) e PUT atualiza/sobreescreve o objeto inteiro)
*/
