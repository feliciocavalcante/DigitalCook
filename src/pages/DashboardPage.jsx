import { Cake, Clock, FishSimple, ForkKnife, Horse, Lock, Martini, Pizza } from 'phosphor-react'
import { CookingPot, Heart, MagnifyingGlass, Star, User } from 'phosphor-react'
import culinaria from '../src/assets/culinaria.png'
import salada from '../src/assets/salada.png'
import tortaa from '../src/assets/tortaa.png'
import macarrao from '../src/assets/macarrao.png'
import coracao from '../src/assets/coracao.png'
import estrela from '../src/assets/estrela.png'
import './App.css'
import BotaoMenu from './components/Menu'

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

      {/* parte do Felicio */}

      <section className="bg-[#101010] w-full min-h-screen px-4 ">

        <div className="text-center">
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-2 flex justify-center items-center gap-2'>Receitas em <span className='text-[#FE9A00]'>Destaque</span></h1>
          <p className='text-[#FAFAFA] text-[25px]  flex justify-center items-center opacity-70'>Descubra as receitas mais populares e bem avaliadas da nossa comunidade</p>
        </div>

        <div className='flex justify-center py-10'>
          <div className='flex flex-col sm:flex-row sm:flex-wrap mt-1 justify-center items-stretch gap-6 '>
            <div class=" cursor-pointer  max-w-sm flex  ">
              <div class="   bg-gray-900 transform transition duration-500 hover:scale-105 hover:shadow-l">
                <div class="relative aspect-[4/3] overflow-hidden">
                  <img src={macarrao} alt="" className='recipe-image transform transition duration-300 hover:scale-410' />

                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <button class="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-lg border border-white/10 bg-black/30 text-white hover:bg-black/50 transition-colors">
                    <img src={coracao} alt="" className='transform transition duration-300 hover:scale-110' />
                  </button>

                  <div class="absolute top-3 left-3 text-white text-sm font-medium px-3 py-1 rounded-full bg-[#FE9A00]">
                    Massas
                  </div>

                  <div class="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                    <img src={estrela} alt="" class="w-5 h-4" />
                    <span class="text-white text-sm font-medium">4.8</span>
                  </div>
                </div>

                <div class="p-6">
                  <h3 class="text-xl font-bold text-[#FAFAFA] mb-2 hover:text-[#FE9A00] transition-colors">
                    Pasta Cremosa com Cogumelos
                  </h3>

                  <p class="text-gray-400 text-sm mb-4 line-clamp-2">
                    Uma deliciosa pasta cremosa com cogumelos frescos e ervas aromáticas. Perfeita para um jantar especial.
                  </p>

                  <div class="flex items-center justify-between mb-4 ">
                    <div class="flex items-center gap-55 text-sm text-gray-400  ">
                      <div class="flex items-center gap-1">
                        <Clock size={20} />
                        <span>25 min</span>
                      </div>
                      <div class="flex items-center ">
                        <span class="px-2 py-1 bg-gray-800 rounded-md text-xs ">Fácil</span>
                      </div>
                    </div>
                  </div>

                  <button class="w-full bg-[#FE9A00] hover:bg-[#C11380] text-white font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer">
                    Ver Receita
                  </button>
                </div>
              </div>
            </div>

            <div class=" cursor-pointer  max-w-sm flex max-auto">
              <div class=" overflow-hidden  bg-gray-900 transform transition duration-500 hover:scale-105 hover:shadow-lg">
                <div class="relative aspect-[4/3] overflow-hidden">
                  <img src={tortaa} alt="" />

                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <button class="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-lg border border-white/10 bg-black/30 text-white hover:bg-black/50 transition-colors">
                    <img src={coracao} alt="" className='transform transition duration-500 hover:scale-110' />
                  </button>

                  <div class="absolute top-3 left-3 text-white text-sm font-medium px-3 py-1 rounded-full bg-[#FE9A00]">
                    Sobremesas
                  </div>

                  <div class="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                    <img src={estrela} alt="" class="w-5 h-4" />
                    <span class="text-white text-sm font-medium">4.8</span>
                  </div>
                </div>

                <div class="p-6">
                  <h3 class="text-xl font-bold text-[#FAFAFA] mb-2 hover:text-[#FE9A00] transition-colors">
                    Bolo de Chocolate Decadente
                  </h3>

                  <p class="text-gray-400 text-sm mb-4 line-clamp-2">
                    Um bolo de chocolate úmido e rico, coberto com ganache sedosa e frutas vermelhas frescas.
                  </p>

                  <div class="flex items-center justify-between mb-4 ">
                    <div class="flex items-center gap-55 text-sm text-gray-400  ">
                      <div class="flex items-center gap-1">
                        <Clock size={20} />
                        <span>25 min</span>
                      </div>
                      <div class="flex items-center ">
                        <span class="px-2 py-1 bg-gray-800 rounded-md text-xs ">Fácil</span>
                      </div>
                    </div>
                  </div>

                  <button class="w-full bg-[#FE9A00] hover:bg-[#FE9A00] text-white font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer">
                    Ver Receita
                  </button>
                </div>
              </div>
            </div>

            <div class=" cursor-pointer  max-w-sm flex ">
              <div class=" overflow-hidden  bg-gray-900 transform transition duration-500 hover:scale-105 hover:shadow-lg">
                <div class="relative aspect-[4/3] overflow-hidden">
                  <img src={salada} alt="" />

                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <button class="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-lg border border-white/10 bg-black/30 text-white hover:bg-black/50 transition-colors">
                    <img src={coracao} alt="" className='transform transition duration-300 hover:scale-110' />
                  </button>

                  <div class="absolute top-3 left-3 text-white text-sm font-medium px-3 py-1 rounded-full bg-[#FE9A00]">
                    Saladas
                  </div>

                  <div class="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                    <img src={estrela} alt="" class="w-5 h-4" />
                    <span class="text-white text-sm font-medium">4.8</span>
                  </div>
                </div>

                <div class="p-6">
                  <h3 class="text-xl font-bold text-[#FAFAFA] mb-2 hover:text-[#FE9A00] transition-colors">
                    Salada Mediterranean Fresh
                  </h3>

                  <p class="text-gray-400 text-sm mb-4 line-clamp-2">
                    Salada fresca e colorida com vegetais crocantes, abacate e um molho mediterrâneo especial.
                  </p>

                  <div class="flex items-center justify-between mb-4 ">
                    <div class="flex items-center gap-55 text-sm text-gray-400  ">
                      <div class="flex items-center gap-1">
                        <Clock size={20} />
                        <span>25 min</span>
                      </div>
                      <div class="flex items-center ">
                        <span class="px-2 py-1 bg-gray-800 rounded-md text-xs ">Fácil</span>
                      </div>
                    </div>
                  </div>

                  <button class="w-full bg-[#FE9A00] hover:bg-[#FE9A00] text-white font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer">
                    Ver Receita
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* parte do Felicio */}


      {/* parte do Guto */}

      <section className='flex flex-col justify-center  bg-[#101010] text-white'>
        <div className='text-3xl font-bold flex flex-col items-center'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-2 flex justify-center items-center gap-2'>Explote por  <span className='text-[#FE9A00]'>Categorias</span></h1>
        </div>
        <div className='mb-6'>
          <p className='text-[#FAFAFA] text-[25px] text-center flex justify-center items-center opacity-70'>Encontre exatamente o que você está procurando navegando pelas nossas <br /> categorias</p>
        </div>


        <div className='grid grid-cols-4 gap-4 mx-auto'>
          <BotaoMenu title="Massas" span="+150" icon={<ForkKnife size={32} color="#f9f0f0" className='bg-[#F5582E] rounded-md' />} />

          <BotaoMenu title="Sobremesas" span="+1" icon={<Cake size={32} color="#f9f0f0" className='bg-[#C94CD5] rounded-md' />} />

          <BotaoMenu title="Saladas" span="+1" icon={<FishSimple size={32} color="#f9f0f0" className='bg-[#11C075] rounded-md' />} />

          <BotaoMenu title="Pizzas" span="+1" icon={<Pizza size={32} color="#f9f0f0" className='bg-[#F78712] rounded-md' />} />

          <BotaoMenu title="Frutos do mar" span="+1" icon={<FishSimple size={32} color="#f9f0f0" className='bg-blue-500 rounded-md' />} />

          <BotaoMenu title="Carnes" span="+1" icon={<Horse size={32} color="#cadec9" weight="thin" className='bg-[#E71E62] rounded-md' />} />

          <BotaoMenu title="Bebidas" span="+1" icon={<Martini size={32} color="#f9f0f0" className='bg-[#E46209] rounded-md' />} />

          <BotaoMenu title="Gelados" span="+1" icon={<FishSimple size={32} color="#f9f0f0" className='bg-blue-500 rounded-md' />} />
        </div>

        <button className='text-[#FE9A00] flex justify-center items-center p-4 bg-[#0E0E0E] rounded-xl  shadow-md'>Ver todas as Categoria</button>
      </section>

      {/* parte do Guto */}



      {/* Parte do Célio */}


      {/* Parte do Célio */}

      <hr />
      <h1>ola mundo</h1>
      <hr />
      

    </>

  )
}

export default App