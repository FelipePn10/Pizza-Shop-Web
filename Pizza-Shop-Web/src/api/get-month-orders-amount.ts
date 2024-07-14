import { api } from "@/lib/axios";

export interface GetMonthOrdersAmountResponse {
  amount: number,
  diffFromLastMonth: number
}

export async function getMounthOrdersAmount() {
  const response = await api.get<GetMonthOrdersAmountResponse>('/metrics/month-orders-amount')
  return response.data
}