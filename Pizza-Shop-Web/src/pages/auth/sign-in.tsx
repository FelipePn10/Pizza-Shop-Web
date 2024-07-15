import { signIn } from "@/api/sign-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signInForm = z.object({
  email: z
    .string()
    .email({ message: "Por favor, preencha com um e-mail válido!" })
    .trim(),
});

type SignInForm = z.infer<typeof signInForm>;

export function SingIn() {
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get("email") ?? "",
    },
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email });

      toast.success("Enviamos um link de autenticação para o seu E-mail.", {
        duration: 1500,
        action: {
          label: "Reenviar",
          onClick: () => handleSignIn(data),
        },
      });
    } catch {
      toast.error("Não foi possível realizar o login. Credenciais inválidas!");
    }
  }

  return (
    <>
      <Helmet title="login" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8">
          <Link to="/sign-up">Novo Cadastro</Link>
        </Button>
        <div className="flex w-[340px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sn text-muted-foreground">
              Acompanhe suas vendas e pedidos pelo painel
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar Painel
            </Button>
          </form>
            <div className="flex items-center justify-center mt-6">
            <p className="text-muted-foreground">
              Por enquanto, o sistema de autenticação de login via e-mail, 
              não está funcionando. 
              Você pode acessar a aplicação através do link abaixo! 
              Obrigado pela atenção. {""}{""}{""}
              <Link to={"/"} className="text-rose-800 hover:text-red-600">
                  Acessar o dashboard
              </Link>
            </p>
          </div>  
        </div>
      </div>
    </>
  );
}
