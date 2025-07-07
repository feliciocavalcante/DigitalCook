import { CookingPot, Heart, MagnifyingGlass, Star, User } from 'phosphor-react'
import culinaria from '../src/assets/culinaria.png'
import './App.css'

function App() {
  return (
    <header className="flex flex-col w-full h-screen">

      {/* Navbar */}
      <div className="flex w-full h-16 bg-black justify-between p-4 items-center">
        <div className="flex gap-2 justify-center items-center">
          <CookingPot size={33} color="#ffffff" weight="bold" className="bg-amber-400 p-1 rounded-md" />
          <div className="flex flex-col">
            <h1 className="text-amber-400 text-xl font-medium">DigitalCook</h1>
            <p className="text-[12px] text-gray-400">App de Receitas</p>
          </div>
        </div>

        {/* Campo de busca */}
        <div className="flex gap-3 items-center border border-white w-110 h-7 px-3 rounded-2xl">
          <MagnifyingGlass size={18} color="#ffffff" weight="bold" />
          <input
            className="bg-transparent text-white w-full h-full outline-none text-center"
            type="search"
            placeholder="Buscar receitas..."
          />
        </div>

        {/* Ícones */}
        <div className="flex gap-8 p-2">
          <Heart size={22} color="#ffffff" weight="bold" className="cursor-pointer transform hover:scale-110 transition-transform" />
          <User size={22} color="#ffffff" weight="bold" className="cursor-pointer transform hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Seção principal com imagem de fundo escurecida */}
      <div
        className="relative flex flex-col w-full h-full justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${culinaria})` }}
      >
        {/* Overlay escura */}
        <div className="absolute inset-0 bg-black opacity-85 z-0" />

        {/* Conteúdo sobre a imagem */}
        <div className="relative z-10 flex flex-col items-center gap-12 w-full">

          {/* Destaque de receitas */}
          <div className="flex">
            <div className="flex items-center justify-center bg-amber-400 w-40 h-6 gap-1 rounded-2xl">
              <Star size={13} color="#b1023f" weight="bold" />
              <p className="text-[13px] text-center text-gray-100">Mais de 1000 receitas</p>
            </div>
          </div>

          {/* Títulos */}
          <div className="text-center">
            <h1 className="text-5xl text-white">Descubra o</h1>
            <h1 className="text-5xl text-amber-500 font-bold">Sabor Perfeito</h1>
          </div>

          {/* Descrição */}
          <div>
            <p className="text-white break-keep font-medium bg-amber-800/10 p-1 rounded-md max-w-xl text-center">
              Explore receitas incríveis, compartilhe seus pratos favoritos e transforme sua cozinha em uma verdadeira obra de arte culinária.
            </p>
          </div>

          {/* Botões */}
          <div className="flex justify-center items-center gap-6 border-b-2 border-gray-300/20 w-[1000px] pb-4">
            <button className="bg-amber-600 px-5 py-2 rounded-md text-white cursor-pointer transform hover:scale-105 transition-transform">
              Explorar Receitas
            </button>
            <button className="bg-gray-800/75 px-5 py-2 rounded-md text-white cursor-pointer transform hover:scale-105 transition-transform">
              Ver Categorias
            </button>
          </div>

          {/* Estatísticas */}
          <div className="flex gap-16 w-full max-w-3xl py-6 items-center justify-center rounded-md">
            <div className="flex flex-col items-center">
              <h1 className="text-2xl text-amber-500 font-bold">1000+</h1>
              <p className="text-[15px] text-white">Receitas</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl text-amber-500 font-bold">50k+</h1>
              <p className="text-[15px] text-white">Usuários</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl text-amber-500 font-bold">25k+</h1>
              <p className="text-[15px] text-white">Categorias</p>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default App