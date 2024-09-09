import { TApplication, TApplicationCreate } from "../schemas/application.schemas";
import { prisma } from "../database/prisma";
import { injectable } from "tsyringe";
import { application } from "express";

@injectable()
export class ApplicationsServices {
    
    async create(opportunityId: number, body: TApplicationCreate): Promise<TApplication> {
        const data = await prisma.application.create({data: {...body, opportunityId}});
       
        return data;
    }
    
    async findMany(opportunityId: number): Promise<{ id: number; name: string; email: string; linkedin: string; opportunityId: number; }[]> {
        const data = await prisma.application.findMany({
            where: { opportunityId: opportunityId }});
        console.log(data)
    
        return data
        }

    

}
