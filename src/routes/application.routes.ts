import { Router } from "express";
import { ApplicationsControlers } from "../controllers/applications.controllers";
import { ValidateBody } from "../middleware/validateBody.middleware";
import { applicationCreateSchema } from "../schemas/application.schemas";
import { validateToken } from "../middleware/validateToken.middleware";

export const ApplicationRouter = Router();

const applicationControllers = new ApplicationsControlers();

ApplicationRouter.post("/:id/applications", ValidateBody.execute(applicationCreateSchema), applicationControllers.create);

ApplicationRouter.get("/:id/applications", validateToken.execute, (req, res) => applicationControllers.findMany);