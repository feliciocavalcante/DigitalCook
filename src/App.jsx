import macarrao from '../src/assets/macarrao.png'
import coracao from '../src/assets/coracao.png'
import estrela from '../src/assets/estrela.png'
import './App.css'
import { Clock } from '@phosphor-icons/react'


function App() {

  return (
    <>
      <section className="bg-[#0C0C0C] w-full min-h-screen px-4 ">

        <div  className="text-center">
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-2 flex justify-center items-center gap-2'>Receitas em <span className='text-[#C11357]'>Destaque</span></h1>
          <p className='text-[#FAFAFA] text-[25px]  flex justify-center items-center opacity-70'>Descubra as receitas mais populares e bem avaliadas da nossa comunidade</p>
        </div>

        <div className='flex justify-center py-10'>
          <div className='flex flex-col sm:flex-row sm:flex-wrap mt-1 justify-center items-stretch gap-6 '>
            <div class=" cursor-pointer  max-w-sm flex  ">
              <div class="   bg-gray-900 transform transition duration-500 hover:scale-105 hover:shadow-l">
                <div class="relative aspect-[4/3] overflow-hidden">
                  <img src={macarrao} alt="" className='recipe-image transform transition duration-300 hover:scale-410'/>

                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <button class="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-lg border border-white/10 bg-black/30 text-white hover:bg-black/50 transition-colors">
                   <img src={coracao} alt="" className='transform transition duration-300 hover:scale-110'/>
                  </button>

                  <div class="absolute top-3 left-3 text-white text-sm font-medium px-3 py-1 rounded-full bg-[#AE1143]">
                    Massas
                  </div>

                  <div class="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                    <img src={estrela} alt="" class="w-5 h-4" />
                    <span class="text-white text-sm font-medium">4.8</span>
                  </div>
                </div>

                <div class="p-6">
                  <h3 class="text-xl font-bold text-[#FAFAFA] mb-2 hover:text-[#C11357] transition-colors">
                    Pasta Cremosa com Cogumelos
                  </h3>

                  <p class="text-gray-400 text-sm mb-4 line-clamp-2">
                    Uma deliciosa pasta cremosa com cogumelos frescos e ervas aromáticas. Perfeita para um jantar especial.
                  </p>

                  <div class="flex items-center justify-between mb-4 ">
                    <div class="flex items-center gap-55 text-sm text-gray-400  ">
                      <div class="flex items-center gap-1">
                        <Clock  size={20} />
                        <span>25 min</span>
                      </div>
                      <div class="flex items-center ">
                        <span class="px-2 py-1 bg-gray-800 rounded-md text-xs ">Fácil</span>
                      </div>
                    </div>
                  </div>

                  <button class="w-full bg-[#AE1143] hover:bg-[#C11380] text-white font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer">
                    Ver Receita
                  </button>
                </div>
              </div>
            </div>

            <div class=" cursor-pointer  max-w-sm flex max-auto">
              <div class=" overflow-hidden  bg-gray-900 transform transition duration-500 hover:scale-105 hover:shadow-lg">
                <div class="relative aspect-[4/3] overflow-hidden">
                  <img src={macarrao} alt=""  />

                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <button class="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-lg border border-white/10 bg-black/30 text-white hover:bg-black/50 transition-colors">
                   <img src={coracao} alt="" className='transform transition duration-500 hover:scale-110'/>
                  </button>

                  <div class="absolute top-3 left-3 text-white text-sm font-medium px-3 py-1 rounded-full bg-[#AE1143]">
                    Massas
                  </div>

                  <div class="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                    <img src={estrela} alt="" class="w-5 h-4" />
                    <span class="text-white text-sm font-medium">4.8</span>
                  </div>
                </div>

                <div class="p-6">
                  <h3 class="text-xl font-bold text-[#FAFAFA] mb-2 hover:text-[#C11357] transition-colors">
                    Pasta Cremosa com Cogumelos
                  </h3>

                  <p class="text-gray-400 text-sm mb-4 line-clamp-2">
                    Uma deliciosa pasta cremosa com cogumelos frescos e ervas aromáticas. Perfeita para um jantar especial.
                  </p>

                  <div class="flex items-center justify-between mb-4 ">
                    <div class="flex items-center gap-55 text-sm text-gray-400  ">
                      <div class="flex items-center gap-1">
                        <Clock  size={20} />
                        <span>25 min</span>
                      </div>
                      <div class="flex items-center ">
                        <span class="px-2 py-1 bg-gray-800 rounded-md text-xs ">Fácil</span>
                      </div>
                    </div>
                  </div>

                  <button class="w-full bg-[#AE1143] hover:bg-[#C11380] text-white font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer">
                    Ver Receita
                  </button>
                </div>
              </div>
            </div>

            <div class=" cursor-pointer  max-w-sm flex ">
              <div class=" overflow-hidden  bg-gray-900 transform transition duration-500 hover:scale-105 hover:shadow-lg">
                <div class="relative aspect-[4/3] overflow-hidden">
                  <img src={macarrao} alt="" />

                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <button class="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-lg border border-white/10 bg-black/30 text-white hover:bg-black/50 transition-colors">
                   <img src={coracao} alt="" className='transform transition duration-300 hover:scale-110' />
                  </button>

                  <div class="absolute top-3 left-3 text-white text-sm font-medium px-3 py-1 rounded-full bg-[#AE1143]">
                    Massas
                  </div>

                  <div class="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                    <img src={estrela} alt="" class="w-5 h-4" />
                    <span class="text-white text-sm font-medium">4.8</span>
                  </div>
                </div>

                <div class="p-6">
                  <h3 class="text-xl font-bold text-[#FAFAFA] mb-2 hover:text-[#C11357] transition-colors">
                    Pasta Cremosa com Cogumelos
                  </h3>

                  <p class="text-gray-400 text-sm mb-4 line-clamp-2">
                    Uma deliciosa pasta cremosa com cogumelos frescos e ervas aromáticas. Perfeita para um jantar especial.
                  </p>

                  <div class="flex items-center justify-between mb-4 ">
                    <div class="flex items-center gap-55 text-sm text-gray-400  ">
                      <div class="flex items-center gap-1">
                        <Clock  size={20} />
                        <span>25 min</span>
                      </div>
                      <div class="flex items-center ">
                        <span class="px-2 py-1 bg-gray-800 rounded-md text-xs ">Fácil</span>
                      </div>
                    </div>
                  </div>

                  <button class="w-full bg-[#AE1143] hover:bg-[#C11380] text-white font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer">
                    Ver Receita
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
