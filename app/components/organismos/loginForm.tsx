"use client";

import { Input } from "../atomos/input";
import { Button } from "../atomos/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../lib/loginSchema";
import { z } from "zod";
import { login } from "../../services/authService";
import { useRouter } from "next/navigation";

type LoginFormData = z.input<typeof loginSchema>;

export const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const user = await login(data.email, data.senha);

      console.log("Usuário logado:", user);

      alert(`Bem-vindo, ${user.nome}!`);

      router.push("/gerenciamento");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-around rounded-sm gap-6 p-16 bg-backgroundClaro"
    >
      {/* Email */}
      <div>
        <Input
          placeholder="Digite seu email"
          type="email"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* Senha */}
      <div>
        <Input
          placeholder="Digite sua senha"
          type="password"
          {...register("senha")}
        />
        {errors.senha && (
          <span className="text-red-500 text-sm">
            {errors.senha.message}
          </span>
        )}
      </div>

      {/* Botão Entrar */}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Entrando..." : "Entrar"}
      </Button>

      {/* Cadastro */}
      <Link href="/cadastro/funcionario">
        <Button type="button">Cadastrar-se</Button>
      </Link>
    </form>
  );
};
