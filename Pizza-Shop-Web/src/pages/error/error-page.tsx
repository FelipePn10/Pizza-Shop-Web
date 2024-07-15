import { Link, useRouteError } from "react-router-dom";

export function Error() {
    const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whoops, algo inesperado acontenceu...Tente novamente!</h1>
      <p className="text-accent-foreground">
        Voltar para o{" "}
        <Link to="/" className="dark-text-sky-400 text-emerald-600">
          Dashboard
        </Link>
      </p>
    </div>
  );
}
