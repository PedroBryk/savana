import { Input } from "../atomos/input";
import { Button } from "../atomos/button";
import Link from "next/link";

export const LoginForm = () => {
  return (
    <div className="flex flex-col justify-around rounded-sm gap-6 p-16 bg-backgroundClaro">
      
      {/* Input Email */}
      <Input 
        placeholder="Digite seu email" 
        type="email" 
      />

      {/* Input Senha */}
      <Input 
        placeholder="Digite sua senha" 
        type="password" 
      />

      {/* Botão Entrar */}
      <Link href="/gerenciamento">
        <Button>
          Entrar
        </Button>
      </Link>

      {/* Botão/Link Cadastrar */}
      <Link href="/cadastro/funcionario">
        <Button>
          Cadastrar-se
        </Button>
      </Link>

    </div>
  );
};
