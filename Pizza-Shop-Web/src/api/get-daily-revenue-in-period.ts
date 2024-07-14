import { api } from "@/lib/axios";

export type GetDailyRevenueInPeriodResponse = {
  data: string,
  receipt: number
}[]

export async function getDailyRevenueInPeriodAmount() {
  const response = await api.get<GetDailyRevenueInPeriodResponse>('/metrics/daily-receipt-in-period')
  return response.data
}