import { z } from "zod";


console.log(import.meta.env.VITE_API_URL);


const envSchema = z.object({
  VITE_API_URL: z.string().url(),
});


export const env = envSchema.parse({
  VITE_API_URL: import.meta.env.VITE_API_URL,
});
