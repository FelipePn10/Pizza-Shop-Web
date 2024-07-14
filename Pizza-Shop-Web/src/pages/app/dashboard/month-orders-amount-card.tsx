import { getMounthOrdersAmount } from "@/api/get-month-orders-amount";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";


export function MonthOrdersAmountCard() {
  const { data: monthOrdersAmount } = useQuery({
    queryKey: ['metrics', 'day-orders-amount'],
    queryFn: getMounthOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
      {monthOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tighter">{monthOrdersAmount.amount.toLocaleString('pt-BR')}</span>
              <p className="text-muted-foreground text-xs">
                {monthOrdersAmount.diffFromLastMonth >= 0 ? (
                  <>
                  <span className="text-emerald-500 dark:text-emerald-400">+{monthOrdersAmount.diffFromLastMonth}</span>
                    em relação ao mês passado
                  </>
                ) : (
                  <>
                  <span className="text-rose-500 dark:text-rose-400">{monthOrdersAmount.diffFromLastMonth}%</span>
                    em relação ao mês passado
                 </>
                )}
              </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}