import { Input } from "../atomos/input";
import { Button } from "../atomos/button";
import Link from "next/link";

export const CadastroFuncionario = () => {
  return (
    <div className="flex flex-col justify-around rounded-sm gap-6 p-16 bg-backgroundClaro">
      
      <Input 
        placeholder="CPF" 
        type="number" 
      />

      <Input 
        placeholder="Nome Completo" 
        type="text" 
      />

      <Input 
        placeholder="Email" 
        type="email" 
      />

      <Input 
        placeholder="Senha" 
        type="Confirme a senha" 
      />


      <Button>
        Cadastrar
      </Button>

    </div>
  );
};
