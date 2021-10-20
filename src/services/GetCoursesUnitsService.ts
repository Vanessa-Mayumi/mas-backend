import { getRepository } from "typeorm";
import { CourseUnit } from "../model/CourseUnit";

interface UserId {
    id?: string;
}

class GetCoursesUnitesService {

    public async execute({id}:UserId){

        const courseUnitRepository = getRepository(CourseUnit);

        const courseUnit = courseUnitRepository.find();

        if(!CourseUnit){
            return{
                message:"Courses units not found"
            }
        }

        return CourseUnit
    }

}

export {GetCoursesUnitesService};