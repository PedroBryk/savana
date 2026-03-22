import { Input } from "../atomos/input";
import { Button } from "../atomos/button";
import Link from "next/link";

export const CadastroProdutos = () => {
  return (
    <div className="flex flex-col justify-around rounded-sm gap-6 p-16 bg-backgroundClaro">
      
      <Input 
        placeholder="Nome do Produto" 
        type="text" 
      />

      <Input 
        placeholder="Descrição" 
        type="text" 
      />

      <Input 
        placeholder="Enviar Fotos" 
        type="image" 
      />

      <Button>
        Cadastrar
      </Button>

    </div>
  );
};
