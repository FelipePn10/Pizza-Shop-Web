import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export function MonthOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tighter">349</span>
        <p className="text-muted-foreground text-xs">
          <span className="text-emerald-500 dark:text-emerald-400">+9% </span>
          em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
}