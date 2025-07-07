import { Cake, FishSimple, ForkKnife, Horse, Martini, Pizza } from 'phosphor-react'
import './App.css'

function App() {

  return (
    <>
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
