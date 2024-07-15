import { getMounthRevenue } from "@/api/get-month-revenue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

export function MonthRevenue() {
  const { data: monthRevenue } = useQuery({
    queryKey: ['metrics', 'month-revenue'],
    queryFn: getMounthRevenue,
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita Total (mês)
        </CardTitle>
        <DollarSign className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
      {monthRevenue ? (
          <>
            <span className="text-2xl font-bold tracking-tighter">{(monthRevenue.receipt / 100).toLocaleString('pt-BR', {
              style: 'currency', currency: 'BRL'
            })}</span>
              <p className="text-muted-foreground text-xs">
                {monthRevenue.diffFromLastMonth <= 0 ? (
                  <>
                  <span className="text-emerald-500 dark:text-emerald-400">{monthRevenue.diffFromLastMonth}</span>
                    em relação ao mês passado
                  </>
                ) : (
                  <>
                  <span className="text-rose-500 dark:text-rose-400">+{monthRevenue.diffFromLastMonth}%</span>
                    em relação ao mês passado
                 </>
                )}
              </p>
          </>
        ): (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}
