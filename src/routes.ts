import {Router} from 'express';
import { ActivyController } from './controller/ActivyController';
import { AuthenticateController } from './controller/AuthenticateController';
import { CourseUnitController } from './controller/CourseUnitController';
import { UserContoller } from './controller/UserController';
import authenticated from './middlewares/authenticated';

const userController = new UserContoller();
const courseUnitController = new CourseUnitController();
const activyController = new ActivyController();
const authController = new AuthenticateController();

<<<<<<< Updated upstream
routes.get('/user', (request, response) => response.json({
    message: 'Hello World'
}))

export default routes; 
=======
const routes = Router();

routes.get('/', userController.test);
routes.post('/auth', authController.create);
routes.post('/user', userController.create);
routes.get('/user', authenticated, userController.show);
routes.post('/activy',authenticated, activyController.create);
routes.get('/activy', authenticated, activyController.show);
routes.post('/courseunit',authenticated, courseUnitController.create);
routes.get('/courseunit', authenticated, courseUnitController.show);
>>>>>>> Stashed changes

export default routes;