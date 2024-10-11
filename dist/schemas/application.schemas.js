"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationCreateSchema = exports.applicationSchemas = void 0;
const zod_1 = require("zod");
exports.applicationSchemas = zod_1.z.object({
    id: zod_1.z.number().positive(),
    name: zod_1.z.string().min(1),
    email: zod_1.z.string().min(1).email(),
    linkedin: zod_1.z.string().min(1).url(),
    opportunityId: zod_1.z.number().positive()
});
exports.applicationCreateSchema = exports.applicationSchemas.omit({ id: true, opportunityId: true });
