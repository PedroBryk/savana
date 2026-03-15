import { CardIcon } from "../atomos/cardIcon";
import { Title } from "../atomos/title";
import { Description } from "../atomos/description";
import { Button } from "../atomos/button";
import Link from "next/link";

interface CardProps {
    image: string;
    title: string;
    imageAlt: string;
    description: string;
    buttonText: string;
    href: string;
}

export const Card = ({ image, title, description, buttonText, imageAlt, href }: CardProps) => {
  return (
    <div className="flex-col basis-64 items-center justify-center p-4 border rounded-xl">

        <CardIcon
            src={image}
            alt={imageAlt}
        />

        <Title>{title}</Title>

        <Description>{description}</Description>

        <Link href={href}>
            <Button className="bg-blue-500 text-white px-4 py-2">
                {buttonText}
            </Button>
        </Link>

    </div>
  );
};