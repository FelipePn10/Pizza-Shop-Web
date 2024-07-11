import { env } from "@/env";
import axios from "axios";

console.log("Configurando Axios com baseURL:", env.VITE_API_URL);

// Criando a instância do Axios com a URL base a partir das variáveis de ambiente
export const api = axios.create({
  baseURL: env.VITE_API_URL,
});
