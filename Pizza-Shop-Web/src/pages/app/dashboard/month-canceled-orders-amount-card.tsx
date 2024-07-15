import { getMounthCanceledOrdersAmount } from "@/api/get-month-canceled-orders-amount";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { TicketX } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

export function MonthCanceledOrdersAmountCard() {
  const { data: monthCanceledOrdersAmount } = useQuery({
    queryKey: ['metrics', 'month-canceled-orders-amount'],
    queryFn: getMounthCanceledOrdersAmount,
  })


  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <TicketX className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
      {monthCanceledOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tighter">{monthCanceledOrdersAmount.amount.toLocaleString('pt-BR')}</span>
              <p className="text-muted-foreground text-xs">
                {monthCanceledOrdersAmount.diffFromLastMonth <= 0 ? (
                  <>
                  <span className="text-emerald-500 dark:text-emerald-400">{monthCanceledOrdersAmount.diffFromLastMonth}</span>
                    em relação ao mês passado
                  </>
                ) : (
                  <>
                  <span className="text-rose-500 dark:text-rose-400">+{monthCanceledOrdersAmount.diffFromLastMonth}%</span>
                    em relação ao mês passado
                 </>
                )}
              </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}
