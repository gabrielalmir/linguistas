import Link from "next/link";

const Sidebar = () => {
  return (
    <div
        className="sidebar h-screen bg-zinc-800 p-5 fixed md:relative z-20 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out">
        <nav className="flex flex-col space-y-2">
            <Link href="/" className="flex items-center py-2 hover:text-rose-500" data-tooltip="Explorar">
                <i className="fas fa-compass mr-2"></i>
            </Link>
            <Link href="/chat" className="flex items-center py-2 hover:text-rose-500" data-tooltip="Chat">
                <i className="fas fa-comments mr-2"></i>
            </Link>
            <Link href="#" className="flex items-center py-2 hover:text-rose-500" data-tooltip="Galeria">
                <i className="fas fa-images mr-2"></i>
            </Link>
            <Link href="#" className="flex items-center py-2 hover:text-rose-500" data-tooltip="Gerar Imagem">
                <i className="fas fa-magic mr-2"></i>
            </Link>
            <Link href="#" className="flex items-center py-2 hover:text-rose-500" data-tooltip="Criar Personagem">
                <i className="fas fa-user-plus mr-2"></i>
            </Link>
        </nav>
    </div>
  );
};

export default Sidebar;
