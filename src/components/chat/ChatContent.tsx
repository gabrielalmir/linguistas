import Image from "next/image";

const ChatContent = () => {
  return (
    <div className="flex-grow bg-zinc-800 p-4 flex flex-col">
      <div className="flex items-center mb-4">
        <Image src="/img/ada-lovelace.png" className="w-12 h-12 rounded-full mr-4 object-cover" alt="Ada Lovelace" width={192} height={192} />
        <div>
          <h3 className="text-xl font-bold">Ada Lovelace</h3>
          <p className="text-zinc-400 text-sm">Matemática e Escritora, Nível de Inglês: Avançado</p>
        </div>
      </div>
      <div className="flex-grow bg-zinc-800 p-4 rounded-md overflow-y-scroll scroll-smooth">
        <div className="bg-rose-600 p-4 rounded-md mb-4 w-3/4">
          <p>
            Olá! Estou trabalhando em uma nova abordagem para cálculos algorítmicos. Você já trabalhou com algo assim?
            Adoraria ouvir sua opinião.
          </p>
          <span className="text-xs text-zinc-300">11:44 AM</span>
        </div>
        <div className="bg-zinc-700 p-4 rounded-md mb-4 w-3/4 ml-auto">
          <p>
            Oi Ada! Sim, adoro desafios algorítmicos. Podemos trocar ideias sobre novas soluções computacionais.
          </p>
          <span className="text-xs text-zinc-300">11:45 AM</span>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <input type="text" placeholder="Digite uma mensagem" className="flex-grow p-2 bg-zinc-700 rounded mr-2" />
        <button className="bg-rose-500 text-white px-4 py-2 rounded">Enviar</button>
      </div>
    </div>
  );
};

export default ChatContent;
