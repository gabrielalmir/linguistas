const HeroSection = () => {
  return (
    <div className="hero bg-zinc-900 p-10 mb-6">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl font-bold text-white mb-6">
          Aprenda Idiomas com <strong className="text-rose-500">Personalidades Históricas</strong>
        </h1>
        <p className="text-zinc-300 text-center mb-6">
          Torne seu aprendizado de idiomas uma jornada emocionante ao lado de figuras históricas inspiradoras. Explore novas culturas com seus heróis favoritos!
        </p>
        <button className="bg-rose-500 text-white px-4 py-2 rounded">Começar</button>
      </div>
    </div>
  );
};

export default HeroSection;
