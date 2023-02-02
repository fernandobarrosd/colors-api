import { Router } from "express";
import { FindAllColorsController } from "../controllers/colors/FindAllColorsController";
import { FindByIdColorController } from "../controllers/colors/FindByIdColorController";


export const routes = Router();




routes.get("/api/colors", new FindAllColorsController().handle);
routes.get("/api/color", new FindByIdColorController().handle);