import { Request, Response } from "express";
import { ApplicationsServices } from "../services/applications.services";
import { container } from "tsyringe";


export class ApplicationsControlers {
   
    async create(req: Request, res: Response) {
        const applicationsServices = container.resolve(ApplicationsServices);

        const response = await applicationsServices.create(Number(req.params.id), req.body);

        return res.status(201).json(response);
    }
    
    async findMany(req: Request, res: Response) {
        
        const applicationsServices = container.resolve(ApplicationsServices);

        const response = await applicationsServices.findMany(Number(req.params.id));
        
        return res.status(200).json(response);
    }
}

