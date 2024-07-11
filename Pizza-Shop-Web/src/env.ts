import { z } from "zod";

// Definindo o esquema para validação da variável de ambiente
const envSchema = z.object({
  VITE_API_URL: z.string().url({ message: "Invalid url" }),
});

// Analisando as variáveis de ambiente
export const env = envSchema.parse({
  VITE_API_URL: import.meta.env.VITE_API_URL,
});

console.log("API URL:", env.VITE_API_URL);
