"use client";

import { Input } from "../atomos/input";
import { Button } from "../atomos/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { animalSchema } from "../../lib/animalSchema";
import { z } from "zod";

type AnimalFormData = z.input<typeof animalSchema>;

export const CadastroAnimal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AnimalFormData>({
    resolver: zodResolver(animalSchema),
  });

  const onSubmit = (data: AnimalFormData) => {
    console.log("Dados enviados:", data);
    alert("Animal cadastrado com sucesso!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-around rounded-sm gap-6 p-16 bg-backgroundClaro"
    >
      <div className="flex flex-col">
        <Input placeholder="Nome do Animal" {...register("nome")} />
        {errors.nome && (
          <span className="text-red-500 text-sm">
            {errors.nome.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <Input placeholder="Espécie" {...register("especie")} />
        {errors.especie && (
          <span className="text-red-500 text-sm">
            {errors.especie.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <Input placeholder="Sexo" {...register("sexo")} />
        {errors.sexo && (
          <span className="text-red-500 text-sm">
            {errors.sexo.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <Input
          type="number"
          placeholder="Idade Aproximada"
          {...register("idade")}
        />
        {errors.idade && (
          <span className="text-red-500 text-sm">
            {errors.idade.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <Input placeholder="Raça" {...register("raca")} />
      </div>

      <div className="flex flex-col">
        <textarea
          placeholder="História e Perfil Comportamental"
          {...register("historia")}
          className="border p-2 rounded text-background placeholder:text-background"
        />
        {errors.historia && (
          <span className="text-red-500 text-sm">
            {errors.historia.message}
          </span>
        )}
      </div>

      <Button type="submit">Cadastrar</Button>
    </form>
  );
};
