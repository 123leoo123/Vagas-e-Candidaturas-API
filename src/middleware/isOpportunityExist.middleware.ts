import { NextFunction, Request, Response } from "express";
import { OpportunityServices } from "../services/opportunity.services";
import { prisma } from "../database/prisma";
import { string } from "zod";
import { appError } from "../errors/appError";

// export class IsOpportunityExist {
//     static async execute(req: Request, res: Response, next: NextFunction){
//         const opportunity = req.params.opportunity;

//         const opportunityExist = await prisma.opportunity.findFirst( where: { title: string || description: string (opportunityId)})
    
//         if(opportunityExist == req.params.opportunity){
//             throw new appError(401, "Opportunity has already exist")
//         }
//     next();
//     }
// }

export class IsOpportunityExist {
    static async execute(req: Request, res: Response, next: NextFunction){
        const { title, description } = req.body;

        const opportunityExist = await prisma.opportunity.findFirst({ where: { 
            OR: [ {title: title,} 
                {description: description } 
            ]
        }});
    }

    if(opportunityExist){
        throw new appError(401, "Opportunity has already exist")
    }
}