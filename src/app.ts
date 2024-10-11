import jwt from "jsonwebtoken";
import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express, { json } from "express";
import helmet from "helmet";
import cors from "cors";
import { opportunityRouter } from "./routes/opportunity.routes";
import { handleErrors } from "./middleware/handleErrors.middleware";
import { userRoutes } from "./routes/user.routes";
import supertest from "supertest";

export const app = express();

console.log(process.env.EXAMPLE)

app.use(json());

app.use(cors());

app.use(helmet());

app.use("/opportunities", opportunityRouter);

app.use("/users", userRoutes);

app.use(handleErrors.execute);

export const request = supertest(app);



app.get("/auth", (req, res) => {
  try {
    const token = req.headers.authorization;

    const secret = process.env.JWT_SECRET;

    if(token && secret) {
      jwt.verify(token, secret);

      const payload = jwt.decode(token);

      return res.status(200).json(payload);
    }

  } catch (error) {
    return res.status(403).json(error);

  }
})


