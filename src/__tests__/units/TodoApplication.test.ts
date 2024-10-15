import { prisma } from "../../database/prisma";
import { Todo } from "@prisma/client"; // Ensure you have the correct import for the Todo type
import { todo } from "@prisma/client";
import { container } from "tsyringe";

import { todoCreateUser } from "../__mocks__/todo.mocks";
import { prismaMock } from "../__mocks__/prisma";
import { ApplicationsServices } from "../../services/applications.services";

describe("Unit test: TodoApplication", () => {
    beforeEach(async () => {
        await prisma.todo.deleteMany();
    });

    test("create todo should work correctly", async () => {
        const applicationsServicess = container.resolve(ApplicationsServices)

        prismaMock.application.create.mockResolvedValue();
        
        const data = userServices.register(todoCreateUser)
        });

        expect(data.id).toBeDefined();
        expect(data.name).toBe("Leonardo Leão");
        expect(data.email).toBe("leonardo@email.com");
        expect(data.linkedin).toBe("https://www.linkedin.com/in/leonardo-leao");
    });

    test("findmany todo should work correctly", async () => {
        const data: Todo[] = await prisma.todo.findMany();
        expect(data.length).toBeGreaterThanOrEqual(0); // Add an assertion to use the data
    });
});