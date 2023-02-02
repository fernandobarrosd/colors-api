import { Response, Request } from "express";
import { ColorRepository } from "../../repositories/colors/ColorRepository";

export class FindByIdColorController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;
        const colorRepo = new ColorRepository();
        const color = colorRepo.findById(id);
        return res.status(200).json(color);
        
    }
}