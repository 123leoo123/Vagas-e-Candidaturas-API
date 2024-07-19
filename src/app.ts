import jwt from "jsonwebtoken";
import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express, { json } from "express";
import helmet from "helmet";
import { OpportunityRouter } from "./routes/opportunity.routes";
import { handleErrors } from "./middleware/handleErrors.middleware";
import { userRoutes } from "./routes/user.routes";

export const app = express();

console.log(process.env.EXAMPLE)

app.use(json());

app.use(helmet());

app.use("/opportunities", OpportunityRouter);

app.use("/users", userRoutes);

app.use(handleErrors.execute);



// app.get("/auth", (req, res) => {
//   try {
//     const token = req.headers.authorization;

//     const secret = process.env.JWT_SECRET;

//     if(token && secret) {
//       jwt.verify(token, secret);

//       const payload = jwt.decode(token);

//       return res.status(200).json(payload);
//     }

//   } catch (error) {
//     return res.status(403).json(error);

//   }
// })

// app.post("/login", (req, res) => {
//     if (process.env.JWT_SECRET) {
//       const token = jwt.sign({ id: 1}, process.env.JWT_SECRET, { expiresIn: "12h" });

//       return res.status(200).json({ acessToken: token });
//     }
    
// })

