import Image from "next/image";

const ChatSidebar = () => {
  return (
    <div className="bg-zinc-800 w-1/4 p-4">
      <h3 className="text-lg font-bold mb-4">Conversas</h3>
      <input type="text" placeholder="Buscar personalidade..." className="w-full p-2 bg-zinc-700 rounded mb-4" />
      <div className="bg-zinc-700 p-2 rounded flex items-center mb-2">
        <Image src="/img/ada-lovelace.png" className="w-10 h-10 rounded-full mr-2 object-cover" alt="Ada Lovelace" width={160} height={160} />
        <div>
          <p className="font-bold">Ada Lovelace</p>
          <p className="text-sm text-zinc-400">Oi! Vamos discutir algoritmos?</p>
        </div>
      </div>
      <div className="bg-zinc-700 p-2 rounded flex items-center mb-2">
        <Image src="/img/alan-turing.png" className="w-10 h-10 rounded-full mr-2 object-cover" alt="Alan Turing" width={160} height={160} />
        <div>
          <p className="font-bold">Alan Turing</p>
          <p className="text-sm text-zinc-400">Preciso de ajuda com criptografia.</p>
        </div>
      </div>
      <div className="bg-zinc-700 p-2 rounded flex items-center mb-2">
        <Image src="/img/marie-curie.png" className="w-10 h-10 rounded-full mr-2 object-cover" alt="Marie Curie" width={160} height={160} />
        <div>
          <p className="font-bold">Marie Curie</p>
          <p className="text-sm text-zinc-400">Falaremos sobre química hoje?</p>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
