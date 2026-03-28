import { CardProduto } from "../components/moleculas/cardProduto";

export default function AdocaoPage() {
  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-2">Cardápio</h1>
      <p className="mb-6">Confira o nosso cardápio</p>

      <div
        className="
          grid 
          gap-6 
          justify-items-center
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-3
        "
      >
        <CardProduto
          image="/images/comidas/bolo.png"
          title="Bolo de Chocolate"
          imageAlt="Bolo de Chocolate"
          description="Bolo de Chocolate Intenso: Massa fofinha de cacau 70% com uma generosa camada de brigadeiro gourmet."
        />

        <CardProduto
          image="/images/comidas/cheesecake.png"
          title="Cheesecake"
          imageAlt="Cheesecake"
          description="Base crocante de biscoito com creme de queijo leve e calda  de morango e amora."
        />

        <CardProduto
          image="/images/comidas/quiche.png"
          title="Quiche"
          imageAlt="Quiche"
          description="Massa folhada leve e amanteigada, recheada com camadas de queijo Gruyère derretido"
        />

        <CardProduto
          image="/images/comidas/capucino.png"
          title="Capuccino"
          imageAlt="Capuccino"
          description="Equilíbrio entre café expresso, leite vaporizado e uma espuma densa e cremosa, e uma pitada de cacau."
        />

        <CardProduto
          image="/images/comidas/capucino.png"
          title="Mocha"
          imageAlt="Mocha"
          description="Para os amantes de chocolate. Uma mistura deliciosa de calda de chocolate artesanal, café expresso e leite vaporizado"
        />

        <CardProduto
          image="/images/comidas/latte.png"
          title="Latte"
          imageAlt="Latte"
          description="Expresso batido com leite gelado e gelo, finalizado com um toque artístico de crema"
        />
  
      </div>
    </div>
  );
}