import './App.css'

function App() {

  return (
    <header className='flex flex-col w-full h-screen'>
      <div className="flex w-full h-16 bg-black justify-between p-4 items-center ">

        <div className="flex gap-2 justify-center items-center">
          <CookingPot size={33} color="#ffffff" weight="bold" className='bg-amber-400 p-1 rounded-md' />
          <div className="flex flex-col">
            <h1 className="text-amber-400 text-xl font-medium">DigitalCook</h1>
            <p className="text-[12px] text-gray-400">App de Receitas</p>
          </div>
        </div>

        <div className="flex gap-3 items-center border-1 border-white h-7 p-3 rounded-2xl">

          <MagnifyingGlass size={18} color="#ffffff" weight="bold" />
          <input className='border-1 border-white justify-center text text-white w-100 h-7 rounded-2xl outline-none border-none' type="search" name="" id="" />

        </div>

        <div className="flex gap-8 p-2">
          <Heart size={22} color="#ffffff" weight="bold" />
          <User size={22} color="#ffffff" weight="bold" />
        </div>

      </div>
      <div className=" flex-col w-full h-full bg-[url('https://blog.consumer.com.br/wp-content/uploads/2020/11/culin%C3%A1ria-regional-brasileira.jpg')] opacity-90 bg-cover justify-center items-center flex gap-5 ">

        <div className="flex items-center justify-center bg-amber-400 w-40 h-6 gap-1 rounded-2xl">
          <Star size={13} color="#b1023f" weight="bold" />
          <p className='text-[13px] text-center text-white'>Mais de 1000 receitas</p>
        </div>

        <div className="">
          <h1 className="text-5xl text-white  ml-10">
            Descubra o
          </h1>

          <h1 className="text-5xl text-amber-500 font-bold">
            Sabor Perfeito
          </h1>

        </div>

        <div className="">
          <p className='text-white break-keep font-medium bg-amber-600 p-1 rounded-md'>
            Explore receitas incriveis, compartinhe seus pratos favoritos e transforme sua cozinha em uma verdadeira obra de arte culinária.
          </p>
        </div>


      </div>
    </header>