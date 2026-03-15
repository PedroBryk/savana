import { Card } from "../app/components/moleculas/card"


export default function ComunidadePage() {
  return (

    <div className="flex flex-col md:flex-row">
        <Card
            image="/images/adocao.png"
            imageAlt="Foto de um cachorro triste no canto de um abrigo"
            title="Adoção"
            description="Confira os animais disponíveis para adoção!"
            buttonText="Conferir Animais"
            href= "/adocao"
        />

        <Card
            image="/images/cardapio.png"
            imageAlt="Foto de uma xícara de café"
            title="Cardápio"
            description="Confira nosso delicioso cardápio"
            buttonText="Conferir Cardápio"
            href= "/cardapio"
        />

        <Card
            image="/images/doacoes.png"
            imageAlt="Foto de um cachorro com a pata amputada"
            title="Doações"
            description="Descubra como realizar uma doação"
            buttonText="Realizar Doações"
            href= "/doacoes"
        />

        <Card
            image="/images/regras.png"
            imageAlt="Foto de vários anmais brincando"
            title="Horários e Regras"
            description="Confira os nossos horários e regras para visitação"
            buttonText="Conferir Horários e Regras"
            href= "/regras"
        />
        
    </div>
    


  );
}