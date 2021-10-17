import { Router } from 'express';
import { ActivyController } from './controller/ActivyController';
import { AuthenticateController } from './controller/AuthenticateController';
import { CourseUnitController } from './controller/CourseunitController';
import { UserController } from './controller/UserController';
import authenticated from './middlewares/authenticated';

const userController = new UserController();
const courseUnitController = new CourseUnitController();
const activyController = new ActivyController();
const authController = new AuthenticateController();

const routes = Router();

routes.post('/user', userController.create);
routes.post('/auth', authController.create);
routes.post('/activy',authenticated, activyController.create);
routes.post('/courseunit',authenticated, courseUnitController.create);

export default routes;