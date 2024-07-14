export type OrderStatus = "pending" | "canceled" | "processing" | "delivering" | "delivered";

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: "Pendente",
  canceled: "Cancelado",
  processing: "Preparando",
  delivering: "Em rota de entrega",
  delivered: "Entregue"
}

export function OrdersStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span className="h-2 w-2 rounded-full bg-yellow-500" />
      )}

      {status === 'canceled' && (
        <span className="h-2 w-2 rounded-full bg-rose-600" />
      )}

      {status === 'delivered' && (
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      )}

      {['processing', 'delivering'].includes(status) && (
        <span className="h-2 w-2 rounded-full bg-lime-500" />
      )}
      <span className="text-muted-foreground font-medium">{orderStatusMap[status]}</span>
    </div>
  )
}