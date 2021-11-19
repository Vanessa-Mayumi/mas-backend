import {Request, Response} from 'express'
import { CreateCourseUnitService } from '../services/CreateCourseUnitService';
import { GetCoursesUnitesService } from '../services/GetCoursesUnitesService';

class CourseUnitController{

    async create(request:Request, response:Response){

        const courseUnitData = request.body;

        const createCourseUnit = new CreateCourseUnitService();

        const courseUnit = await createCourseUnit.execute(courseUnitData);
        
        return response.json(courseUnit);
    }
    async show (request: Request, response:Response){
        const userId = request.body.user;

        const getCoursesUnits = new GetCoursesUnitesService();

        const CoursesUnits = await getCoursesUnits.execute(userId);

        return response.json(CoursesUnits);
    }
}

export {CourseUnitController}