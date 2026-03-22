import { CardIcon } from "../atomos/cardIcon";
import { Title } from "../atomos/title";
import Link from "next/link";

interface LoginButtonProps {
    title: string;
    href: string;
}

export const LoginButton = ({title, href }: LoginButtonProps) => {
  return (
    <Link href={href}>
        <div className="flex-col basis-64 items-center justify-center p-4">

        <img src="/images/pata.png" alt="" />
        <Title>{title}</Title>
    </div>
    </Link>
  );
};