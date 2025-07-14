import macarao from '../assets/macarrao.png';
import { useNavigate } from "react-router-dom";

function Receita2() {
    const navigate = useNavigate();

    function handleHome() {
        navigate("/");
    }

    return (
        <div className='flex w-full h-screen bg-black'>
            <div className=' flex justify-center items-center ml-10 '>
                <img className='flex rounded-xl ' src={macarao} alt="Macarrão com molho cremoso de cogumelos" />

            </div>
            <div className='w-1/2 flex flex-col justify-center items-center gap-3 border-2 border-amber-400 rounded-xl m-10 '>
            
                <h1 className='text-amber-400 text-[40px] font-medium h-12 ' >Receita </h1>
                <h2 className='text-amber-400 text-[25px] font-medium ' >Macarrão com molho cremoso  de cogumelos</h2>

                <p className='text-white text-[18px] font-medium ' >Ingredientes:</p>
                <div className='text-white text-[15px] font-medium ml-10 ' >
                    <p>
                        1 colher de sopa de manteiga<br />
                        250g de cogumelos fatiados<br />
                        3 dentes de alho<br />
                        Tomilho (opcional)<br />
                        1/4 xícara de vinho branco<br />
                        1 e 1/2 xícara de creme de leite fresco<br />
                        Sal e pimenta do reino a gosto<br />
                        Parmesão a gosto<br />
                        200g de massa de sua preferência
                    </p>
                </div>

                <button className='bg-amber-400 text-black font-bold py-2 px-4 rounded mt-7 ml-3' onClick={handleHome} >
                    Voltar para Home
                </button>
            </div>
        </div>
    );
}

export default Receita2;
