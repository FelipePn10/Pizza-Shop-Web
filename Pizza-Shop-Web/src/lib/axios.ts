import { env } from "@/env";
import axios from "axios";
import { config } from "process";

console.log("Configurando Axios com baseURL:", env.VITE_API_URL);

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true
});