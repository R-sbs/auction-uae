import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2,"Username Must be atleast 2 characters")
    .max(20, "Username must be no more than 20 characters")
   // .regex

export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:'Invali email address'
    }),
    password:z.string().min(6,{message:"password must be at least 6 characters"})
})

//extract the inferred type from schema
export type UserValidationSchemaType = z.infer<typeof signUpSchema>