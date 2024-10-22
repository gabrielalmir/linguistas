import Card from './Card';

const CardsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card
        imageUrl="/img/ada-lovelace.png"
        name="Ada Lovelace"
        description="Matemática e Escritora. Conhecida por seu trabalho pioneiro em programação."
        languageLevel="Nível de Inglês: Avançado"
      />
      <Card
        imageUrl="/img/alan-turing.png"
        name="Alan Turing"
        description="Matemático e Criptógrafo. Pai da ciência da computação moderna."
        languageLevel="Nível de Inglês: Avançado"
      />
      <Card
        imageUrl="/img/marie-curie.png"
        name="Marie Curie"
        description="Física e Química. Primeira mulher a ganhar o Prêmio Nobel."
        languageLevel="Nível de Francês: Avançado"
      />
      <Card
        imageUrl="/img/nikola-tesla.png"
        name="Nikola Tesla"
        description="Inventor e Engenheiro. Revolucionou a ciência elétrica."
        languageLevel="Nível de Inglês: Intermediário"
      />
      <Card
        imageUrl="/img/amelia-earhart.png"
        name="Amelia Earhart"
        description="Aviadora e Escritora. Primeira mulher a voar sozinha sobre o Atlântico."
        languageLevel="Nível de Inglês: Intermediário"
      />
      <Card
        imageUrl="/img/grace-hopper.png"
        name="Grace Hopper"
        description="Cientista da Computação. Criadora do primeiro compilador."
        languageLevel="Nível de Inglês: Avançado"
      />
      <Card
        imageUrl="/img/isaac-newton.png"
        name="Isaac Newton"
        description="Físico e Matemático. Estabeleceu as leis do movimento."
        languageLevel="Nível de Inglês: Avançado"
      />
    </div>
  );
};

export default CardsSection;
