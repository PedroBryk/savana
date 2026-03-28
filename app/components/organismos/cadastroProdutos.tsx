"use client";

import { Input } from "../atomos/input";
import { Button } from "../atomos/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastroProdutoSchema } from "../../lib/cadastroProdutoSchema";
import { z } from "zod";

type FormData = z.input<typeof cadastroProdutoSchema>;

export const CadastroProdutos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(cadastroProdutoSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Produto cadastrado:", data);

    // acessar imagem
    const file = data.imagem[0];
    console.log("Imagem:", file);

    alert("Produto cadastrado com sucesso!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-around rounded-sm gap-6 p-16 bg-backgroundClaro"
    >
      {/* Nome */}
      <div>
        <Input placeholder="Nome do Produto" {...register("nome")} />
        {errors.nome && (
          <span className="text-red-500 text-sm">
            {errors.nome.message}
          </span>
        )}
      </div>

      {/* Descrição */}
      <div>
        <Input placeholder="Descrição" {...register("descricao")} />
        {errors.descricao && (
          <span className="text-red-500 text-sm">
            {errors.descricao.message}
          </span>
        )}
      </div>

      {/* Upload de imagem */}
      <div>
        <Input type="file" {...register("imagem")} />
        {errors.imagem && (
          <span className="text-red-500 text-sm">
            {errors.imagem.message as string}
          </span>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Cadastrando..." : "Cadastrar"}
      </Button>
    </form>
  );
};
