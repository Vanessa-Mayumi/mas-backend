import { getRepository } from "typeorm";
import { Activy } from "../model/Activy";

interface UserId{
    id?:string
}

class GetActiviesService{
    
    public async execute(data:UserId){
        const activyRepository = getRepository(Activy);

        const activies = await activyRepository.find({relations: ["course_unit"]});

        if(!activies){
            return {
                message:"activies not found"
            }
        }

        return activies;
    }
}

export {GetActiviesService}