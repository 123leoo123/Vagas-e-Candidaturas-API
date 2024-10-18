import { prisma } from "../../database/prisma";
import { container } from "tsyringe";
import { mocktesteresolve, todoCreateApplication, todoCreateOpportunity, todoCreateUser, todoLoginUser } from "../__mocks__/todo.mocks";
import { prismaMock } from "../__mocks__/prisma";
import { ApplicationsServices } from "../../services/applications.services";
import { UserServices } from "../../services/user.services";
// import "reflect-metadata";
 

describe("Unit test: TodoApplication", () => {
    beforeEach(async () => {
        // await prisma.todo.deleteMany();
    });

    test("create todo should work correctly", async () => {
        const userServices = container.resolve(UserServices)

        prismaMock.user.create.mockResolvedValue(todoCreateUser);

        const returnToken = await userServices.login(todoCreateUser) => {
            console.log(returnToken)
            const token = todoLoginUser.token;
        }
        
        const applicationsServicess = container.resolve(ApplicationsServices)

        prismaMock.opportunity.create.mockResolvedValue(todoCreateOpportunity);
        
        prismaMock.application.create.mockResolvedValue(mocktesteresolve);
        
        const data = await applicationsServicess.create(todoCreateOpportunity.id, todoCreateApplication);
        console.log(data)

        expect(data).toEqual(todoCreateApplication);

        // expect(data.id).toBeDefined();
        // expect(data.name).toBe("Leonardo Leão");
        // expect(data.email).toBe("leonardo@email.com");
        // expect(data.linkedin).toBe("https://www.linkedin.com/in/leonardo-leao");
    });

    // test("findmany todo should work correctly", async () => {
    //     const data: Todo[] = await prisma.todo.findMany();
    //     expect(data.length).toBeGreaterThanOrEqual(0); // Add an assertion to use the data
    // });
});