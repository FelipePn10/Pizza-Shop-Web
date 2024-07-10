import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";

import { ArrowRight, Search, X } from "lucide-react";

export function OrdersTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <DialogContent>Teste</DialogContent>
        </Dialog>
      </TableCell>
      <TableCell className="text-muted-foreground font-mono text-xs font-medium">
        identificador
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          <span className="text-muted-foreground font-medium">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="text-muted-foreground font-medium">
        Felipe Panosso
      </TableCell>
      <TableCell className="text-muted-foreground font-medium">
        R$149,90
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <ArrowRight className="mr-3 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-3 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}