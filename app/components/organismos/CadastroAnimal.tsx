import { Input } from "../atomos/input";
import { Button } from "../atomos/button";
import Link from "next/link";

export const CadastroAnimal = () => {
  return (
    <div className="flex flex-col justify-around rounded-sm gap-6 p-16 bg-backgroundClaro">
      
      <Input 
        placeholder="Nome do Animal" 
        type="text" 
      />

      <Input 
        placeholder="Espécie" 
        type="text" 
      />

      <Input 
        placeholder="Sexo" 
        type="text" 
      />

      <Input 
        placeholder="Idade Aproximada" 
        type="number" 
      />

      <Input 
        placeholder="Raça" 
        type="text" 
      />

       <Input 
        placeholder="História e Perfil Comportamental" 
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
