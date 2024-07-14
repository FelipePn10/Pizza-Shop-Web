import colors from "tailwindcss/colors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ResponsiveContainer, Pie, PieChart, Cell } from "recharts";
import { BarChart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getPopularProducts } from "@/api/get-popular-products";

const data = [
  { product: "Pizza Pepperoni - 8 pedaços", amount: 40 },
  { product: "Refrigerante Coca-Cola - 2L", amount: 70 },
  { product: "Pizza Mussarela - 6 pedaços", amount: 65 },
  { product: "Kit-Kat", amount: 15 },
  { product: "Refrigerante Sprit Sabor Limão - 1L", amount: 35 },
];

const COLORS = [
  colors.blue[600],
  colors.amber[600],
  colors.violet[600],
  colors.cyan[600],
  colors.rose[600],
];

export function PoularProductsChart() {
  const { data: popularProducts } = useQuery({
    queryKey: ["metrics", "popular-products"],
    queryFn: getPopularProducts,
  })

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="itemns-center flex justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="text-muted-foreground h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        {popularProducts && (
          <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontsize: 12 }}>
            <Pie
              data={popularProducts}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = 12 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {popularProducts[index].product.length > 28
                      ? popularProducts[index].product.substring(0, 12).concat("...")
                      : popularProducts[index].product}{" "}
                    ({value})
                  </text>
                );
              }}
            >
              {popularProducts.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="stroke-background hover:opacity-80"
                  />
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
