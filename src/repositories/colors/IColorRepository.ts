import { Cor } from "@prisma/client";
import { IBaseRepository } from "../IBaseRepository";

export interface IColorRepository extends IBaseRepository<Cor, number> {};