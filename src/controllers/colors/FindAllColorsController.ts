import { Response, Request } from "express";
import { ColorRepository } from "../../repositories/colors/ColorRepository";

export class FindAllColorsController {
    async handle(req: Request, res: Response) {
        const colorRepo = new ColorRepository();
        const colors = colorRepo.findAll();


        return res.status(200).json(colors);
        
    }
}