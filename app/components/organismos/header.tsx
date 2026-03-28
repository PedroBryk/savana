import { Title } from "../atomos/title";
import { Description } from "../atomos/description";
import { LoginButton } from "../moleculas/login";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="relative bg-header p-6 flex justify-center items-center">
      
      <div className="absolute left-6">
        <LoginButton
          title="Log-in"
          href="/login"
        />
      </div>
     
      <div className="text-center">
        <Link href={"/"}>
          <Title className="text-3xl p-6">Savana</Title>
        </Link>
        
        <Description className="text-xs">Pet Café</Description>
        <Description className="text-xs">Um café para você um lar para eles</Description>
      </div>

    </header>
  );
};
