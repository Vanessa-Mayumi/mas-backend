import {Router, Request, Response, response} from 'express';
import {UserController} from './controller/UserController';

interface UserRequest {
    name:string;
    email:string;
    password:1234;
}

const userController = new UserController()

const routes = Router();

routes.post('/user', userController.create);
routes.post('/activy', () => console.log('Activy route'));
routes.post('/courseunit', () => console.log('Course Unit route'));

export default routes; 