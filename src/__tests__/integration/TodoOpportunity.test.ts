import { request } from "../../app";
import { prisma } from "../../database/prisma";
import { todoBodyCreateUser, todoCreateOpportunity } from "../__mocks__/todo.mocks";
import jwt from "jsonwebtoken";

describe("Utilits test: TodoOpportunity", () => {
    
    // let user: any;

    beforeEach(async () => {
        await prisma.$transaction([prisma.user.deleteMany(), prisma.opportunity.deleteMany()]);
        // user = await prisma.user.create({data: todoBodyCreateUser });
    });

    test("create opportunity should work correctly", async () => {
        const token = await generateToken();
        const data = await request.post("/opportunities").set('Authorization', `Bearer ${token}`).send({ ...todoCreateOpportunity }).expect(201).then((res) => res.body);
        
        expect(data).toEqual(todoCreateOpportunity);
    })
});

const generateToken = async () => {
    const user = await prisma.user.create({data: todoBodyCreateUser });
    console.log(user)
    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET as string, {expiresIn: "1h"})
    return token;
}