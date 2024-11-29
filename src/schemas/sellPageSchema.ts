import {z} from 'zod'

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const fileSchema = z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    );

export const sellSchema = z.object({
    email:z.string().email({message:'Invali email address' }),
    full_name:z.string().min(1,{message:"Please Enter Full Name"}),
    phone_number:z.string(),
    item_type:z.string(),
    message:z.string().min(1,{message:"Please Enter Message"}),
    sell_image:fileSchema
})

//extract the inferred type from schema
export type sellPageValidationSchemaType = z.infer<typeof sellSchema>