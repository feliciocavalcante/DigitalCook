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
import { useNavigate } from 'react-router-dom'

function App() {
  let navigate = useNavigate();
  function handleLogin() {
    navigate("/");
  }

  function handleLogin() {
    navigate("/Login");
  }

  function handleReceita1() {
    navigate("/Receita1");
  }

  function handleReceita2() {
    navigate("/Receita2");
  }

  function handleReceita3() {
    navigate("/Receita3");
  }

  function handleCadastro() {
    navigate("/Cadastro");
  }

  return (
    <>
      <header className="flex flex-col w-full bg-black">
        <div className="flex w-full h-16 bg-black justify-between p-4 items-center">
          <div className="flex gap-2 justify-center items-center">
            <CookingPot size={33} color="#ffffff" weight="bold" className="bg-amber-400 p-1 rounded-md" />
            <div className="flex flex-col">
              <h1 className="text-amber-400 text-xl font-medium">DigitalCook</h1>
              <p className="text-[12px] text-gray-400">App de Receitas</p>
            </div>
          </div>

          <div className="flex gap-3 items-center border border-white w-full max-w-xs sm:max-w-md h-7 px-3 rounded-2xl">
            <MagnifyingGlass size={18} color="#ffffff" weight="bold" />
            <input
              className="bg-transparent text-white w-full h-full outline-none text-center placeholder:text-gray-400"
              type="search"
              placeholder="Buscar receitas..."
            />
          </div>

          <div className="flex gap-8 p-2">
            <Heart size={22} color="#ffffff" weight="bold" className="cursor-pointer transform hover:scale-110 transition-transform" />
            <button onClick={handleLogin}>
              <User size={22} color="#ffffff" weight="bold" className="cursor-pointer transform hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        <div
          className="relative flex flex-col w-full justify-center items-center bg-cover bg-center px-4 sm:px-6"
          style={{ backgroundImage: `url(${culinaria})` }}
        >
          <div className="absolute inset-0 bg-black opacity-85 z-0" />

          <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-5xl py-10">
            <div className="flex">
              <div className="flex items-center justify-center bg-amber-400 w-40 h-6 gap-1 rounded-2xl">
                <Star size={13} color="#b1023f" weight="bold" />
                <p className="text-[13px] text-center text-gray-100">Mais de 1000 receitas</p>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl text-white">Descubra o</h1>
              <h1 className="text-4xl sm:text-5xl text-amber-500 font-bold">Sabor Perfeito</h1>
            </div>

            <p className="text-white break-keep font-medium bg-amber-800/10 p-1 rounded-md max-w-xl text-center mx-auto">
              Explore receitas incríveis, compartilhe seus pratos favoritos e transforme sua cozinha em uma verdadeira obra de arte culinária.
            </p>

            <div className="flex flex-wrap justify-center gap-4 border-b-2 border-gray-300/20 w-full max-w-[1000px] pb-4">
              <button className="bg-amber-600 px-5 py-2 rounded-md text-white cursor-pointer transform hover:scale-105 transition-transform">
                Explorar Receitas
              </button>
              <button className="bg-gray-800/75 px-5 py-2 rounded-md text-white cursor-pointer transform hover:scale-105 transition-transform">
                Ver Categorias
              </button>
            </div>

            <div className="flex flex-wrap gap-10 justify-center w-full max-w-3xl py-6 items-center rounded-md">
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

      <section className="bg-[#101010] w-full min-h-screen px-4">

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-2 flex justify-center items-center gap-2">Receitas em <span className="text-[#FE9A00]">Destaque</span></h1>
          <p className="text-[#FAFAFA] text-[25px] opacity-70">
            Descubra as receitas mais populares e bem avaliadas da nossa comunidade
          </p>
        </div>

        <div className="flex flex-wrap justify-center py-10 gap-6 max-w-full mx-auto px-2 sm:px-4 lg:px-0">
          <div className="cursor-pointer max-w-xs w-full sm:w-80 flex flex-col bg-gray-900 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-lg">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={macarrao} alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <button className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-lg border border-white/10 bg-black/30 text-white hover:bg-black/50 transition-colors">
                <img src={coracao} alt="" className="transform transition duration-300 hover:scale-110" />
              </button>

              <div className="absolute top-3 left-3 text-white text-sm font-medium px-3 py-1 rounded-full bg-[#FE9A00]">
                Massas
              </div>

              <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                <img src={estrela} alt="" className="w-5 h-4" />
                <span className="text-white text-sm font-medium">4.8</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-[#FAFAFA] mb-2 hover:text-[#FE9A00] transition-colors">
                Pasta Cremosa com Cogumelos
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                Uma deliciosa pasta cremosa com cogumelos frescos e ervas aromáticas. Perfeita para um jantar especial.
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock size={20} />
                    <span>25 min</span>
                  </div>
                  <div className="flex items-center">
                    <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">Fácil</span>
                  </div>
                </div>
              </div>

              <button onClick={handleReceita2} className="w-full bg-[#FE9A00] hover:bg-[#C11380] text-white font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer">
                Ver Receita
              </button>
            </div>
          </div>

          {/* Card Bolo de Chocolate */}
          <div className="cursor-pointer max-w-xs w-full sm:w-80 flex flex-col bg-gray-900 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-lg">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={tortaa} alt="" className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <button className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-lg border border-white/10 bg-black/30 text-white hover:bg-black/50 transition-colors">
                <img src={coracao} alt="" className="transform transition duration-300 hover:scale-110" />
              </button>

              <div className="absolute top-3 left-3 text-white text-sm font-medium px-3 py-1 rounded-full bg-[#FE9A00]">
                Sobremesas
              </div>

              <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                <img src={estrela} alt="" className="w-5 h-4" />
                <span className="text-white text-sm font-medium">4.8</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-[#FAFAFA] mb-2 hover:text-[#FE9A00] transition-colors">
                Bolo de Chocolate Decadente
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                Um bolo de chocolate úmido e rico, coberto com ganache sedosa e frutas vermelhas frescas.
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock size={20} />
                    <span>25 min</span>
                  </div>
                  <div className="flex items-center">
                    <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">Fácil</span>
                  </div>
                </div>
              </div>

              <button onClick={handleReceita1} className="w-full bg-[#FE9A00] hover:bg-[#C11380] text-white font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer">
                Ver Receita
              </button>
            </div>
          </div>

          {/* Card Salada */}
          <div className="cursor-pointer max-w-xs w-full sm:w-80 flex flex-col bg-gray-900 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-lg">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={salada} alt="" className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <button className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-lg border border-white/10 bg-black/30 text-white hover:bg-black/50 transition-colors">
                <img src={coracao} alt="" className="transform transition duration-300 hover:scale-110" />
              </button>

              <div className="absolute top-3 left-3 text-white text-sm font-medium px-3 py-1 rounded-full bg-[#FE9A00]">
                Saladas
              </div>

              <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                <img src={estrela} alt="" className="w-5 h-4" />
                <span className="text-white text-sm font-medium">4.8</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-[#FAFAFA] mb-2 hover:text-[#FE9A00] transition-colors">
                Salada Mediterranean Fresh
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                Salada fresca e colorida com vegetais crocantes, abacate e um molho mediterrâneo especial.
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock size={20} />
                    <span>25 min</span>
                  </div>
                  <div className="flex items-center">
                    <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">Fácil</span>
                  </div>
                </div>
              </div>

              <button onClick={handleReceita3} className="w-full bg-[#FE9A00] hover:bg-[#C11380] text-white font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer">
                Ver Receita
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* parte do Guto */}

      <section className='flex flex-col justify-center bg-[#101010] text-white px-4 sm:px-8 md:px-16 py-10'>
        <div className='text-3xl font-bold flex flex-col items-center mb-6'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAFA] flex justify-center items-center gap-2'>
            Explote por <span className='text-[#FE9A00]'>Categorias</span>
          </h1>
          <p className='text-[#FAFAFA] text-[20px] text-center opacity-70 max-w-lg'>
            Encontre exatamente o que você está procurando navegando pelas nossas categorias
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto'>
          <BotaoMenu title="Massas" span="+150" icon={<ForkKnife size={32} color="#f9f0f0" className='bg-[#F5582E] rounded-md' />} />
          <BotaoMenu title="Sobremesas" span="+1" icon={<Cake size={32} color="#f9f0f0" className='bg-[#C94CD5] rounded-md' />} />
          <BotaoMenu title="Saladas" span="+1" icon={<FishSimple size={32} color="#f9f0f0" className='bg-[#11C075] rounded-md' />} />
          <BotaoMenu title="Pizzas" span="+1" icon={<Pizza size={32} color="#f9f0f0" className='bg-[#F78712] rounded-md' />} />
          <BotaoMenu title="Frutos do mar" span="+1" icon={<FishSimple size={32} color="#f9f0f0" className='bg-blue-500 rounded-md' />} />
          <BotaoMenu title="Carnes" span="+1" icon={<Horse size={32} color="#cadec9" weight="thin" className='bg-[#E71E62] rounded-md' />} />
          <BotaoMenu title="Bebidas" span="+1" icon={<Martini size={32} color="#f9f0f0" className='bg-[#E46209] rounded-md' />} />
          <button className='flex flex-col items-center p-4 bg-[#0E0E0E] rounded-xl border border-gray-400 shadow-md hover:bg-gray-100 transition'>
            <FishSimple size={32} color="#f9f0f0" className='bg-blue-500 rounded-md' />
            <span className='text-sm font-semibold text-white'>Gelados</span>
            <span className='text-xs text-gray-500'>50+</span>
          </button>
        </div>

        <button className='text-[#FE9A00] cursor-pointer mt-8 mx-auto block bg-[#101010] rounded-xl shadow-md px-6 py-3 hover:bg-[#FE9A00]/90 transition-colors'>
          Ver todas as Categorias
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#101015] text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#FE9A00] rounded-lg flex items-center justify-center">
                  <CookingPot size={24} color="#ffffff" weight="bold" />
                </div>
                <div>
                  <h3 className="text-[#FE9A00] font-bold text-lg">DigitalCook</h3>
                  <p className="text-xs text-gray-400">App de Receitas</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Transforme sua cozinha em um laboratório culinário. Descubra, compartilhe e saboreie as melhores receitas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#FE9A00] text-sm">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FE9A00] text-sm">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FE9A00] text-sm">
                  Facebook
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold text-lg">Navegação</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#FE9A00] text-sm block">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#FE9A00] text-sm block">
                    Receitas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#FE9A00] text-sm block">
                    Categorias
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#FE9A00] text-sm block">
                    Favoritos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#FE9A00] text-sm block">
                    Perfil
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold text-lg">Populares</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#FE9A00] text-sm block">
                    Massas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#FE9A00] text-sm block">
                    Sobremesas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#FE9A00] text-sm block">
                    Saladas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#FE9A00] text-sm block">
                    Frutos do Mar
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-gray-400 hover:text-[#FE9A00] text-sm block">
                    Carnes
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold text-lg">Newsletter</h4>
              <p className="text-sm text-gray-400">Receba as melhores receitas diretamente no seu email.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-400"
                />
                <button onClick={handleCadastro} className="cursor-pointer w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg">
                  Inscrever-se
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400">© 2024 DigitalCook. Todos os direitos reservados.</p>
              <p className="text-sm text-gray-400">Feito com ❤️ para amantes da culinária</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

