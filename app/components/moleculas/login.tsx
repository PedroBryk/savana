import { CardIcon } from "../atomos/cardIcon";
import { Title } from "../atomos/title";
import Link from "next/link";

interface LoginButtonProps {
    image: string;
    title: string;
    imageAlt: string;
    href: string;
}

export const LoginButton = ({ image, title, imageAlt, href }: LoginButtonProps) => {
  return (
    <Link href={href}>
        <div className="flex-col basis-64 items-center justify-center p-4 border rounded-xl">

        <CardIcon
            src={image}
            alt={imageAlt}
        />
        <Title>{title}</Title>
    </div>
    </Link>
  );
};