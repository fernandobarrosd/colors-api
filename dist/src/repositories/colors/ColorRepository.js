"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorRepository = void 0;
const prisma_1 = require("../../../lib/prisma");
class ColorRepository {
    async findById(id) {
        const color = await prisma_1.prismaClient.cor.findUnique({
            where: {
                id
            }
        });
        return color;
    }
    async findAll() {
        const colors = await prisma_1.prismaClient.cor.findMany();
        return colors;
    }
}
exports.ColorRepository = ColorRepository;
