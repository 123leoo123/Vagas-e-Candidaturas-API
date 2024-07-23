import { Request, Response } from "express";
import { OpportunityServices } from "../services/opportunity.services";
import { prisma } from "../database/prisma";
import { container, inject, injectable } from "tsyringe";


@injectable()
export class OpportunityControllers {
    constructor(@inject("OpportunityServices") private opportunityServices: OpportunityServices) {}
    
    async create(req: Request, res: Response){
        const id = res.locals.decode?.id;
       
        const response = await this.opportunityServices.create(req.body, id);

        return res.status(201).json(response);
        // try {
        //     const response = await this.opportunityServices.create(req.body, id);
        //     return res.status(201).json(response);
        // } catch (error) {
        //     return res.status(400).json({ error: (error as any).message });
        // }
    }

    async findMany(req: Request, res: Response) {
        const id = res.locals.decode?.id;

        const response = await this.opportunityServices.findMany(id);

        return res.status(200).json(response);
    }

    findOne(req: Request, res: Response) {
        const opportunityServices = container.resolve(OpportunityServices);

        const response = opportunityServices.findOne(res.locals.opportunity);

        return res.status(200).json(response);
    }

    async update(req: Request, res: Response) {
        const opportunityServices = container.resolve(OpportunityServices);

        const response = await opportunityServices.update(Number(req.params.id), req.body);

        return res.status(200).json(response);
    }

    async delete(req: Request, res: Response) {
        const opportunityServices = container.resolve(OpportunityServices);

        await opportunityServices.delete(Number(req.params.id));

        return res.status(204).json();
    }
}