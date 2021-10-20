import {Router} from 'express';

const routes = Router();

<<<<<<< Updated upstream
routes.get('/user', (request, response) => response.json({
    message: 'Hello World'
}))

export default routes; 
=======
routes.post('/auth', authController.create);

routes.get('/user', authenticated, userController.show);
routes.get('/activy', authenticated, userController.show);
routes.get('/courseunit', authenticated, userController.show);

routes.post('/user', userController.create);
routes.post('/activy',authenticated, activyController.create);
routes.post('/courseunit',authenticated, courseUnitController.create);
>>>>>>> Stashed changes

