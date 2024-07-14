import { api } from "@/lib/axios";

export interface GetOrderDetailsParams {
  orderId: string
}

export interface GetOrderDetailsResponse {
    id: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    totalInCents: number;
    customer: {
      phone: string | null;
      email: string;
      name: string;
  }
    orderItems: {
      map(arg0: (item: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
      id: string
      priceInCents: number
      quantity: number
      product: {
        name: string
      }
      address: {
        street: string
      }
      pagament: {
        pix: string
        credit: string
        debito: string
        dinheiro: string
      }
    }
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)
  return response.data
}