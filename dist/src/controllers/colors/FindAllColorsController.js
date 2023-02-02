"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllColorsController = void 0;
const ColorRepository_1 = require("../../repositories/colors/ColorRepository");
class FindAllColorsController {
    async handle(req, res) {
        const colorRepo = new ColorRepository_1.ColorRepository();
        const colors = colorRepo.findAll();
        return res.status(200).json(colors);
    }
}
exports.FindAllColorsController = FindAllColorsController;
