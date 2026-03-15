import { Title } from "../atomos/title";
import { Description } from "../atomos/description";
import { LoginButton } from "../moleculas/login";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 border-b">

      <LoginButton
        image="/images/pata.png"
        imageAlt="Pata de cachorro"
        title="Log-in"
        href="/login"
      />

      <div>
        <Title className="text-xl">Savana</Title>
        <Description className="text-xs">
          Pet Café
        </Description>
        <Description className="text-xs">
          Um café para você um lar para eles
        </Description>
      </div> 
    
    </header>
  );
};
