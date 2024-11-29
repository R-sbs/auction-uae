import {z} from "zod"

export const signInSchema = z.object({
    identifier:z.string().email(),
    password:z.string()
});

//extract the inferred type from schema
export type SignInValidationSchemaType = z.infer<typeof signInSchema>