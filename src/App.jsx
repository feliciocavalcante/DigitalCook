import { Cake, FishSimple, ForkKnife, Horse, Martini, Pizza } from 'phosphor-react'
import { CookingPot, Heart, MagnifyingGlass, Star, User } from 'phosphor-react'
import culinaria from '../src/assets/culinaria.png'
import './App.css'

function App() {
  return (
    <>
      <header className="flex flex-col w-full h-screen">

      <div className="flex w-full h-16 bg-black justify-between p-4 items-center">
        <div className="flex gap-2 justify-center items-center">
          <CookingPot size={33} color="#ffffff" weight="bold" className="bg-amber-400 p-1 rounded-md" />
          <div className="flex flex-col">
            <h1 className="text-amber-400 text-xl font-medium">DigitalCook</h1>
            <p className="text-[12px] text-gray-400">App de Receitas</p>
          </div>
        </div>

        <div className="flex gap-3 items-center border border-white w-110 h-7 px-3 rounded-2xl">
          <MagnifyingGlass size={18} color="#ffffff" weight="bold" />
          <input
            className="bg-transparent text-white w-full h-full outline-none text-center"
            type="search"
            placeholder="Buscar receitas..."
          />
        </div>

        <div className="flex gap-8 p-2">
          <Heart size={22} color="#ffffff" weight="bold" className="cursor-pointer transform hover:scale-110 transition-transform" />
          <User size={22} color="#ffffff" weight="bold" className="cursor-pointer transform hover:scale-110 transition-transform" />
        </div>
      </div>

      <div
        className="relative flex flex-col w-full h-full justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${culinaria})` }}
      >
        <div className="absolute inset-0 bg-black opacity-85 z-0" />

        <div className="relative z-10 flex flex-col items-center gap-12 w-full">

          <div className="flex">
            <div className="flex items-center justify-center bg-amber-400 w-40 h-6 gap-1 rounded-2xl">
              <Star size={13} color="#b1023f" weight="bold" />
              <p className="text-[13px] text-center text-gray-100">Mais de 1000 receitas</p>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl text-white">Descubra o</h1>
            <h1 className="text-5xl text-amber-500 font-bold">Sabor Perfeito</h1>
          </div>

          <div>
            <p className="text-white break-keep font-medium bg-amber-800/10 p-1 rounded-md max-w-xl text-center">
              Explore receitas incríveis, compartilhe seus pratos favoritos e transforme sua cozinha em uma verdadeira obra de arte culinária.
            </p>
          </div>

          <div className="flex justify-center items-center gap-6 border-b-2 border-gray-300/20 w-[1000px] pb-4">
            <button className="bg-amber-600 px-5 py-2 rounded-md text-white cursor-pointer transform hover:scale-105 transition-transform">
              Explorar Receitas
            </button>
            <button className="bg-gray-800/75 px-5 py-2 rounded-md text-white cursor-pointer transform hover:scale-105 transition-transform">
              Ver Categorias
            </button>
          </div>

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

      <section className='flex flex-col justify-center  bg-[#101010] text-white'>
        <div className='text-3xl font-bold flex flex-col items-center'>
          <h1 className=''>Explore por &nbsp;
            <span className='text-pink-500'>Categorias</span>
          </h1>
        </div>
        <div className='mb-6'>
          <p className='flex flex-col items-center p-4'>Encontre exatamente o que você está procurando navegando pelas nossas <span>categorias</span></p>
        </div>


        <div className='grid grid-cols-4 gap-4'>
          <button className='flex flex-col items-center p-4 bg-[#0E0E0E] rounded-xl border border-gray-400 shadow-md hover:bg-gray-100 transition'>
            <ForkKnife size={32} color="#f9f0f0" className='bg-[#F5582E] rounded-md' />
            <span className='text-sm font-semibold text-white'>Massas</span>
            <span className='text-xs text-gray-500'>150+</span>
          </button>

          <button className='flex flex-col items-center p-4 bg-[#0E0E0E] rounded-xl border border-gray-400 shadow-md hover:bg-gray-100 transition'>
            <Cake size={32} color="#f9f0f0" className='bg-[#C94CD5] rounded-md' />
            <span className='text-sm font-semibold text-white'>Sobremesas</span>
            <span className='text-xs text-gray-500'>200+</span>
          </button>

          <button className='flex flex-col items-center p-4 bg-[#0E0E0E] rounded-xl border border-gray-400 shadow-md hover:bg-gray-100 transition'>
            <FishSimple size={32} color="#f9f0f0" className='bg-[#11C075] rounded-md' />
            <span className='text-sm font-semibold text-white'>Saladas</span>
            <span className='text-xs text-gray-500'>120+</span>
          </button>

          <button className='flex flex-col items-center p-4 bg-[#0E0E0E] rounded-xl border border-gray-400 shadow-md hover:bg-gray-100 transition'>
            <Pizza size={32} color="#f9f0f0" className='bg-[#F78712] rounded-md' />
            <span className='text-sm font-semibold text-white'>Pizzas</span>
            <span className='text-xs text-gray-500'>80+</span>
          </button>

          <button className='flex flex-col items-center p-4 bg-[#0E0E0E] rounded-xl border border-gray-400 shadow-md hover:bg-gray-100 transition'>
            <FishSimple size={32} color="#f9f0f0" className='bg-blue-500 rounded-md' />
            <span className='text-sm font-semibold text-white'>Frutos do mar</span>
            <span className='text-xs text-gray-500'>90+</span>
          </button>

          <button className='flex flex-col items-center p-4 bg-[#0E0E0E] rounded-xl border border-gray-400 shadow-md hover:bg-gray-100 transition'>
            <Horse size={32} color="#cadec9" weight="thin" className='bg-[#E71E62] rounded-md' />
            <span className='text-sm font-semibold text-white'>Carnes</span>
            <span className='text-xs text-gray-500'>160+</span>
          </button>

          <button className='flex flex-col items-center p-4 bg-[#0E0E0E] rounded-xl border border-gray-400 shadow-md hover:bg-gray-100 transition'>
            <Martini size={32} color="#f9f0f0" className='bg-[#E46209] rounded-md' />
            <span className='text-sm font-semibold text-white'>Bebidas</span>
            <span className='text-xs text-gray-500'>70+</span>
          </button>

          <button className='flex flex-col items-center p-4 bg-[#0E0E0E] rounded-xl border border-gray-400 shadow-md hover:bg-gray-100 transition'>
            <FishSimple size={32} color="#f9f0f0" className='bg-blue-500 rounded-md' />
            <span className='text-sm font-semibold text-white'>Gelados</span>
            <span className='text-xs text-gray-500'>50+</span>
          </button>
        </div>

        <button className='flex justify-center items-center p-4 bg-[#0E0E0E] rounded-xl  shadow-md'>Ver todas as Categoria</button>

      </section>

    </>
   
  )
}

export default App