import { mockUsers } from "../lib/mockUsers";

export const login = async (email: string, senha: string) => {
  // simula delay de API
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user = mockUsers.find(
    (u) => u.email === email && u.senha === senha
  );

  if (!user) {
    throw new Error("Email ou senha inválidos");
  }

  return user;
};
