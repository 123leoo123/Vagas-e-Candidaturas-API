import { userRegisterBodySchema } from "../../schemas/user.schemas";
import { UserServices } from "../../services/user.services";
import "reflect-metadata";

describe("Unit tests: function ...", () => {   
    test("create todo should work correcthly", async () => {
        const userServices = new UserServices();

        const data = await userServices.register({ name: "leonardo",  email: "ronaldo12@email.com", password: "12345678" });
        
        expect(data.id).toBeDefined();

        expect(userRegisterBodySchema.omit({password: true}).parse(data)).toStrictEqual({ name: "leonardo", email: "ronaldo12@email.com"});
    })
})