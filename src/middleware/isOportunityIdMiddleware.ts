import { NextFunction, Request, Response } from "express";
import { appError } from "../errors/appError";
import { prisma } from "../database/prisma";

export class IsOportunityIdMiddleware {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const id = req.params.id;
        
        const opportunity = await prisma.opportunity.findFirst({ 
            where: { id: Number(id) },
         });
         if (!opportunity) {
            throw new appError(404, "Opportunity not found");
    }
    res.locals.opportunity = opportunity;


   next();
}
}