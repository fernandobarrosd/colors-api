import { Cor } from "@prisma/client";
import { prismaClient } from "../../../lib/prisma";
import { IColorRepository } from "./IColorRepository";

export class ColorRepository implements IColorRepository {
    async findById(id: number): Promise<Cor> {
        const color = await prismaClient.cor.findUnique({
            where: {
                id
            }
        });

        return color as Cor;
    }
    async findAll(): Promise<Cor[]> {
        const colors = await prismaClient.cor.findMany();

        return colors;
    }

}