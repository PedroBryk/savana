import { z } from "zod";

export const cadastroProdutoSchema = z.object({
  nome: z.string().min(2, "Nome do produto é obrigatório"),

  descricao: z.string().min(5, "Descrição muito curta"),

  imagem: z
    .any()
    .refine((file) => file?.length === 1, "Imagem obrigatória")
    .refine(
      (file) => file?.[0]?.type.startsWith("image/"),
      "O arquivo deve ser uma imagem"
    ),
});
