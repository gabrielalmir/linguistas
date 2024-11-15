'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginModal from "./auth/LoginModal";
import SignUpModal from "./auth/SignUpModal";

interface NavbarProps {
  showFilters?: boolean;
  className?: string;
}

const Navbar = ({ showFilters = false, className = '' }: NavbarProps) => {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const openSignUp = () => setSignUpOpen(true);
  const closeSignUp = () => setSignUpOpen(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  const handleSignOut = () => console.log('teste');
  const session = {
    user: {
      name: 'Joe Doe',
      email: 'john.doe@example.com',
      image: '',
    },
  }

  const status: string = 'unauthenticated';

  return (
    <div className={`flex justify-between items-center p-4 pb-0 ${className}`}>
      <h2 className="text-2xl font-bold text-white">
        <Link href="/">
          <span className="text-rose-400">
            <i className="fas fa-language"></i>
          </span>{' '}
          Linguistas
        </Link>
      </h2>

      {showFilters && (
        <div>
          <select className="bg-zinc-900 border border-zinc-700 text-white rounded-md p-2 ml-2">
            <option value="0">Qualquer nível</option>
            <option value="1">Iniciante</option>
            <option value="2">Intermediário</option>
            <option value="3">Avançado</option>
          </select>
          <select className="bg-zinc-900 border border-zinc-700 text-white rounded-md p-2 ml-2">
            <option value="0">Qualquer idioma</option>
            <option value="1">Inglês</option>
            <option value="2">Espanhol</option>
            <option value="3">Japonês</option>
          </select>
        </div>
      )}

      <div>
        {status === "authenticated" ? (
          <div className="flex items-center space-x-4">
            {session.user?.image ? (
              <Image src={session.user.image} alt="User Avatar" className="size-10 rounded-full" width={160} height={160} />
            ) : (
              <div className="size-10 flex items-center justify-center bg-red-400 rounded-full text-white">
                {session.user?.email?.charAt(0).toUpperCase()}
              </div>
            )}
            <span className="text-white font-bold">{session.user?.name}</span>
            <button className="px-4 py-2 rounded border border-rose-500 bg-transparent text-white" onClick={handleSignOut}>
              Sair
            </button>
          </div>
        ) : (
          <>
            <button className="bg-rose-500 text-white px-4 py-2 rounded mr-2" onClick={openSignUp}>Registrar</button>
            <button className="px-4 py-2 rounded border border-rose-500 bg-transparent text-white" onClick={openLogin}>Entrar</button>
          </>
        )}
      </div>

      <SignUpModal isOpen={isSignUpOpen} onClose={closeSignUp} />
      <LoginModal isOpen={isLoginOpen} onClose={closeLogin} />
    </div>
  );
};

export default Navbar;
