import { CardAnimal } from "../components/moleculas/cardAnimal";

export default function AdocaoPage() {
  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-2">Adoção</h1>
      <p className="mb-6">Confira os animais disponíveis para adoção.</p>

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
        <CardAnimal
          image="/images/animais/smiliguido.png"
          title="Smilinguido"
          imageAlt="Cachorro Smilinguido"
          description="Eu sou o Smilinguido sou bem novinho e sou um amorzinho"
          especie="Cachorro"
          sexo="Macho"
          idade="2 anos"
          raca="Vira-lata"
        />

        <CardAnimal
          image="/images/animais/lilo.png"
          title="Lilo"
          imageAlt="Cachorro Lilo"
          description="Eu sou o Lilo e sou muito lindo né"
          especie="Cachorro"
          sexo="Macho"
          idade="1 ano"
          raca="Vira-lata"
        />

        <CardAnimal
          image="/images/animais/silvia.png"
          title="Silvia"
          imageAlt="Cachorro Silvia"
          description="Eu sou a Silvia sou um amor com humanos, mas preciso ser filha única."
          especie="Cachorro"
          sexo="Fêmea"
          idade="3 anos"
          raca="Vira-lata"
        />

        <CardAnimal
          image="/images/animais/tigreza.png"
          title="Tigreza"
          imageAlt="Cachorro Tigreza"
          description="Sou a tigreza eu era um cão comunitário, mas fui atropelada e ninguém me quis"
          especie="Cachorro"
          sexo="Fêmea"
          idade="5 anos"
          raca="Persa"
        />

        <CardAnimal
          image="/images/animais/virginia.png"
          title="Virgínia"
          imageAlt="Cachorro Virgínia"
          description="Sou a Virgínia fui resgatada muito doente e hoje estou 100% pronta para uma família"
          especie="Cachorro"
          sexo="Fêmea"
          idade="1 ano"
          raca="Vira-lata"
        />

        <CardAnimal
          image="/images/animais/alfa.png"
          title="Alfa e Beta"
          imageAlt="Cachorros Alfa e Beta"
          description="Somos Alfa e Beta fomos abandonadas na BR juntas, já castradas somos uns amores."
          especie="Cachorro"
          sexo="Macho"
          idade="4 anos"
          raca="Vira-lata"
        />
      </div>
    </div>
  );
}
