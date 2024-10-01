import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { appError } from "../errors/appError";

export class isEmailAlreadyRegistered {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const user = await prisma.user.findUnique({where: {email: req.body.email}});
        
        if(user) {
           throw new appError(403, "Email already registered");
        }
        next();
    } 
    
}