import { TApplication, TApplicationCreate } from "../schemas/application.schemas";
import { prisma } from "../database/prisma";
import { injectable } from "tsyringe";

@injectable()
export class ApplicationsServices {
    
    async create(opportunityId: number, body: TApplicationCreate): Promise<TApplication> {
        const data = await prisma.application.create({data: {...body, opportunityId}});
       
        return data;
    }
    
    async findMany(opportunityId: number): Promise<TApplication[]> {
        const data = await prisma.application.findMany({where: {opportunityId}});

        return data;
    }
}