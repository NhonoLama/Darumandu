import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z.string().refine((val)=> /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(val))),"Price must have 2 decimal places")

export const insertProductSchema = z.object({
    name: z.string().min(3,"Name must be at least 3 characters long!"),
    description: z.string().min(3,"Description must be at least 3 characters long!"),
    slug: z.string().min(3,"Slug must be at least 3 characters long!"),
    category: z.string().min(3,"Category must be at least 3 characters long!"),
    brand: z.string().min(3,"Brand must be at least 3 characters long!"),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1,"Image must be at least one!"),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency,

})

export const signInFormSchema = z.object({
    email: z.string().email("Invalid email address!"),
    password: z.string().min(6,"Password must be at least 6 characters long!"),
})