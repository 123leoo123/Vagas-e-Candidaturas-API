import { Router } from "express";
import { OpportunityControllers } from "../controllers/opportunity.controllers";
import { ApplicationRouter } from "./application.routes";
import { ValidateBody } from "../middleware/validateBody.middleware";
import { opportunityCreateSchema, opportunityUpdateSchema } from "../schemas/opportunity.schemas";
import { IsOportunityIdMiddleware } from "../middleware/isOportunityIdMiddleware";
import { validateToken } from "../middleware/validateToken.middleware";
import { container } from "tsyringe";
import { OpportunityServices } from "../services/opportunity.services";
import { IsOpportunityOwner } from "../middleware/isOpportunityOwner.middleware";

container.registerSingleton("OpportunityServices", OpportunityServices);
const opportunityControllers = container.resolve(OpportunityControllers);

export const opportunityRouter = Router();

opportunityRouter.post("/", ValidateBody.execute(opportunityCreateSchema), validateToken.execute,  (req, res) => opportunityControllers.create(req, res));
opportunityRouter.get("/user", validateToken.execute, IsOpportunityOwner.execute, (req, res) => opportunityControllers.findMany(req, res));
opportunityRouter.get("/", (req, res) => opportunityControllers.findMany(req, res))
opportunityRouter.use("/:id",  IsOportunityIdMiddleware.execute);
opportunityRouter.get("/:id", validateToken.execute, (req, res) => opportunityControllers.findOne(req, res));
opportunityRouter.patch("/:id", validateToken.execute, ValidateBody.execute(opportunityUpdateSchema), (req, res) => opportunityControllers.update(req,res));
opportunityRouter.delete("/:id", validateToken.execute, (req, res) => opportunityControllers.delete(req,res));
opportunityRouter.use("/", ApplicationRouter);
