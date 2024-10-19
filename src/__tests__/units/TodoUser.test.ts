// import "reflect-metadata";
import { container } from "tsyringe";
import { UserServices } from "../../services/user.services";
import { prismaMock } from "../__mocks__/prisma";
import { todoBodyCreateUser, todoCreateUser, todoReturnUser } from "../__mocks__/todo.mocks";
import { prisma } from "../../database/prisma";
import { mockReset } from "jest-mock-extended";
import { userReturnSchema } from "../../schemas/user.schemas";

describe("Unit test: TodoUser",() => {
    // beforeEach(async () => {
    //     mockReset;
    // });

    test("create todo should work correctly", async () => {
        const userServices = container.resolve(UserServices)

        prismaMock.user.create.mockResolvedValue(todoCreateUser);

        const data = await userServices.register(todoBodyCreateUser);

        expect(data).toEqual(userReturnSchema.parse(todoCreateUser));
    });

    test("find one user should work correctly", async () => {
        const userServices = container.resolve(UserServices);

        prismaMock.user.create.mockResolvedValue(todoCreateUser);
        
        const data = await userServices.getUser("1");

        expect(data)
    });

});

