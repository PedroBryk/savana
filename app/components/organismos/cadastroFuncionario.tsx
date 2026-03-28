"use client";

import { Input } from "../atomos/input";
import { Button } from "../atomos/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastroFuncionarioSchema } from "../../lib/cadastroFuncionarioSchema";
import { z } from "zod";

type FormData = z.input<typeof cadastroFuncionarioSchema>;

export const CadastroFuncionario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(cadastroFuncionarioSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Funcionário cadastrado:", data);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-around rounded-sm gap-6 p-16 bg-backgroundClaro"
    >
      {/* CPF */}
      <div className="flex flex-col">
        <Input placeholder="CPF" {...register("cpf")} />
        {errors.cpf && (
          <span className="text-red-500 text-sm">
            {errors.cpf.message}
          </span>
        )}
      </div>

      {/* Nome */}
      <div className="flex flex-col">
        <Input placeholder="Nome Completo" {...register("nome")} />
        {errors.nome && (
          <span className="text-red-500 text-sm">
            {errors.nome.message}
          </span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <Input type="email" placeholder="Email" {...register("email")} />
        {errors.email && (
          <span className="text-red-500 text-sm">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* Senha */}
      <div className="flex flex-col">
        <Input
          type="password"
          placeholder="Senha"
          {...register("senha")}
        />
        {errors.senha && (
          <span className="text-red-500 text-sm">
            {errors.senha.message}
          </span>
        )}
      </div>

      {/* Confirmar Senha */}
      <div className="flex flex-col">
        <Input
          type="password"
          placeholder="Confirmar Senha"
          {...register("confirmarSenha")}
        />
        {errors.confirmarSenha && (
          <span className="text-red-500 text-sm">
            {errors.confirmarSenha.message}
          </span>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Cadastrando..." : "Cadastrar"}
      </Button>
    </form>
  );
};
