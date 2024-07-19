import {  Router  } from "express";
import { container } from "tsyringe";
import { UserServices } from "../services/user.services";
import { ValidateBody } from "../middleware/validateBody.middleware";
import { userLoginBodySchema, userRegisterBodySchema } from "../schemas/user.schemas";
import { validateToken } from "../middleware/validateToken.middleware";
import { userControllers } from "../controllers/user.controllers";

container.registerSingleton("UserServices", UserServices);

const UserControllers = container.resolve(userControllers);

export const userRoutes = Router();

userRoutes.post("/", ValidateBody.execute(userRegisterBodySchema), (req, res) => 
     UserControllers.register(req, res)
);

userRoutes.post("/login", ValidateBody.execute(userLoginBodySchema), (req, res) => 
    UserControllers.login(req, res)
);

userRoutes.get("/", validateToken.execute, (req, res) =>
    UserControllers.getUser(req, res)
);
