"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByIdColorController = void 0;
const ColorRepository_1 = require("../../repositories/colors/ColorRepository");
class FindByIdColorController {
    async handle(req, res) {
        const { id } = req.body;
        const colorRepo = new ColorRepository_1.ColorRepository();
        const color = colorRepo.findById(id);
        return res.status(200).json(color);
    }
}
exports.FindByIdColorController = FindByIdColorController;
