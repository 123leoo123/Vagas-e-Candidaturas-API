import { z } from 'zod';

export const applicationSchemas = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    email: z.string().min(1).email(),
    linkedin: z.string().min(1).url(),
    opportunityId: z.number().positive()
});

export const applicationCreateSchema = applicationSchemas.omit({ id: true, opportunityId: true });

export type TApplication = z.infer<typeof applicationSchemas>;

export type TApplicationCreate = z.infer<typeof applicationCreateSchema>;