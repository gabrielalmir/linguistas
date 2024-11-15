import Image from "next/image";

const ProfileSidebar = () => {
  return (
    <div className="bg-zinc-800 w-1/4 p-4 overflow-y-scroll scroll-smooth">
      <Image src="/img/ada-lovelace.png" className="w-full rounded-md mb-4" alt="Ada Lovelace" width={384} height={494} />
      <h3 className="text-xl font-bold">Ada Lovelace</h3>
      <p className="text-zinc-400 mb-2">
        Matemática e Escritora, pioneira na programação de computadores.
      </p>
      <p className="text-rose-500 text-sm font-bold">Nível de Inglês: Avançado</p>

      <hr className="my-4 border border-zinc-600" />

      <h3 className="text-lg font-bold mb-4">Interesses</h3>

      <div className="flex flex-wrap">
        <span className="bg-rose-500 text-white px-2 py-1 rounded mr-2 mb-2">Matemática</span>
        <span className="bg-rose-500 text-white px-2 py-1 rounded mr-2 mb-2">Algoritmos</span>
        <span className="bg-rose-500 text-white px-2 py-1 rounded mr-2 mb-2">Inovações</span>
        <span className="bg-rose-500 text-white px-2 py-1 rounded mr-2 mb-2">Computação</span>
        <span className="bg-rose-500 text-white px-2 py-1 rounded mr-2 mb-2">Ciência</span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
