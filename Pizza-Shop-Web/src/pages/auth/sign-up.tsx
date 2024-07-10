import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z
    .string()
    .email({ message: "Por favor, preencha com um e-mail válido!" })
    .trim(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SingUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Cadastro realizado com sucesso!", {
        duration: 1500,
        action: {
          label: "Login",
          onClick: () => navigate("/sign-in"),
        },
      });
    } catch {
      toast.error(
        "Erro ao se cadastrar. Verifique os dados e tente novamente.",
      );
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="flex w-[340px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Crie seu cadastro de Admin
            </h1>
            <p className="text-sn text-muted-foreground">
              Preencha os campos abaixo para criar seu cadastro
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restauranteName">Nome Do estabelecimento</Label>
              <Input
                id="restauranteName"
                type="text"
                {...register("restaurantName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome completo</Label>
              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu número de telefone</Label>
              <Input id="phone" type="text" {...register("phone")} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar cadastro
            </Button>

            <p className="text-muted-foreground px-6 text-center text-sm leading-relaxed">
              Ao continuar, você concorda com nossos{" "}
              <Link to="/policesTerms">
                <span className="text-red-600">
                  Termos de serviços e políticas de privacidade
                </span>
              </Link>{" "}
              da plataforma
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
