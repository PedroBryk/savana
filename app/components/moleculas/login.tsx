"use client";

import { Title } from "../atomos/title";
import Link from "next/link";
import { useUser } from "../../hooks/useUser";
import { LogoutButton } from "../atomos/logoutButton";

interface LoginButtonProps {
  title: string;
  href: string;
}

export const LoginButton = ({ title, href }: LoginButtonProps) => {
  const { user, loading } = useUser();

  if (loading) return null;

  // 🔴 LOGADO
  if (user) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <img src="/images/pata.png" alt="" />

        <Title>Olá, {user.nome}</Title>

        <LogoutButton />
      </div>
    );
  }

  // 🟢 NÃO LOGADO
  return (
    <Link href={href}>
      <div className="flex flex-col items-center justify-center p-4">
        <img src="/images/pata.png" alt="" />

        <Title>{title}</Title>
      </div>
    </Link>
  );
};
