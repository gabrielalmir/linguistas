'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    try {
      onClose();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-content flex flex-row bg-zinc-900 rounded-lg overflow-hidden">
        <div className="w-1/2 hidden md:flex justify-center items-center bg-black">
          <Image src="/img/nikola-tesla.png" className="w-full h-full object-cover rounded-md" alt="Nikola Tesla" width={384} height={494} />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col items-center">
          <span className="modal-close self-end text-2xl cursor-pointer text-white" onClick={onClose}>&times;</span>
          <h2 className="text-2xl font-bold mb-4 text-white">Criar Conta</h2>
          <form className="w-full">
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">Nome</label>
              <input className="w-full px-3 py-2 bg-zinc-700 text-white rounded" type="text" id="type" placeholder="Seu nome"
                value={name} onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">E-mail</label>
              <input className="w-full px-3 py-2 bg-zinc-700 text-white rounded" type="email" id="email" placeholder="E-mail"
                value={email} onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">Senha</label>
              <input className="w-full px-3 py-2 bg-zinc-700 text-white rounded" type="password" id="password" placeholder="Mínimo de 6 caracteres"
                value={password} onChange={e => setPassword(e.target.value)}
              />
            </div>
            {error && <div className="text-center text-white px-4 py-2 rounded mb-4">{error}</div>}
            <button className="bg-rose-500 text-white px-4 py-2 rounded w-full mb-4" onClick={handleSignUp}>Criar Conta</button>
            <div className="text-center mb-4 text-white">ou continue com</div>
            <div className="flex justify-around mb-4 gap-x-4">
              <button className="bg-white text-gray-800 px-4 py-2 rounded flex items-center"><i className="fab fa-google mr-2"></i>Google</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center"><i className="fab fa-discord mr-2"></i>Discord</button>
            </div>
            <div className="text-center text-white">
              <span>Já tem uma conta? <button onClick={onClose} className="text-rose-500">Entrar</button></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
