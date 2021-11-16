import { getRepository } from "typeorm";
import { CourseUnit } from "../model/CourseUnit";

interface UserId{
    id?:string
}

class GetCourseUnitsService{

    public async execute(data:UserId){

        const courseUnitRepository = getRepository(CourseUnit);

        const coursesUnits = await courseUnitRepository.find();

        if(!coursesUnits){
            return {
                message:'courses units not found'
            }
        }

        return coursesUnits;
    }
}

export {GetCourseUnitsService}