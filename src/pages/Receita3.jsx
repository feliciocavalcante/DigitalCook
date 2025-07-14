import { useNavigate } from "react-router-dom";
import salada from '../assets/salada.png';

function Receita3() {
    const navigate = useNavigate();

    function handleHome() {
        navigate("/");
    }

    return (
        <div className='flex w-full h-screen bg-black overflow-hidden' >
            <div className=' flex justify-center items-center ml-2 '>
                <img className='flex rounded-xl ' src={salada} alt="Salada Mediterranean" />

            </div>
            <div className='w-1/2 flex flex-col justify-center gap-2 items-center border-2 border-amber-400 rounded-xl m-3 p-3'>
                <h1 className='text-amber-400 text-[40px] font-medium h-12  ' >Receita </h1>
                <h2 className='text-amber-400 text-[25px] font-medium ' >Salada Mediterranean</h2>

                <p  className='text-white text-[18px] font-medium ' >Ingredientes:</p>

                <div className='text-white text-[11px] font-medium ' >
                    <p className="flex flex-col text-center mb-1">
                        <span className="flex justify-center font-bold text-[16px]">Grão-de-bico:</span> O feijão enlatado é um verdadeiro salva-vidas quando se trata de um alimento básico favorito na despensa. Cada lata padrão de 425g de grão-de-bico vem repleta de fibras e proteínas, fornecendo uma dose dupla de nutrição real e acessível nos 30 segundos necessários para abrir uma lata, escorrer e enxaguar. Eles podem ser consumidos direto da lata, tornando esta uma receita muito adequada para o verão naqueles dias muito quentes, quando você simplesmente não consegue ligar o fogo. Eu sei que esta é uma salada de "grão-de-bico", mas você pode trocar o grão-de-bico pelo seu feijão enlatado favorito: feijão-branco cremoso, feijão-preto e feijão-carioca são ótimas opções.
                    </p>

                    <p className="flex flex-col text-center mb-1" >
                        <span className="flex justify-center font-bold text-[16px]">Vegetais:</span> Pepino picado, pimentão vermelho, cebola roxa e azeitonas Kalamata são meus ingredientes favoritos para esta salada. Embora eu adore esta salada como ela é, se você quiser substituir algum dos ingredientes da salada pelo seu acompanhamento preferido, temos a sua bênção. Não gosta de azeitonas ou pimentões? Tomates-cereja ou abacate maduro em cubos preencherão essa lacuna de sabor.
                    </p>

                    <p className="flex flex-col text-center mb-1" >
                        <span className="flex justify-center font-bold text-[16px]">Queijo feta:</span> Quer manter a dieta sem laticínios? Substitua o queijo feta por outra forma de proteína, como alguns ovos cozidos ou uma lata de atum, ou um punhado de nozes torradas e picadas.
                    </p>

                    <p className="flex flex-col text-center" >
                        <span className="flex justify-center font-bold text-[16px]">O Molho:</span> Eu criei um molho simples para acompanhar toda esta salada com azeite extravirgem, vinagre de vinho branco, suco de limão fresco, salsa fresca picada e flocos de pimenta vermelha. Adoro a simplicidade e o equilíbrio de sabores, mas há algumas coisas a serem observadas aqui. Recomendo fortemente o uso de suco de limão fresco para obter o melhor sabor possível; se você não gosta de pimenta, pode reduzir os flocos de pimenta vermelha ou ajustar a gosto. Use seu azeite extravirgem favorito ou confira nosso ranking das melhores marcas de azeite.
                    </p>
                </div>

                <button className='bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded mt-3' onClick={handleHome}>
                    Voltar para Home
                </button>
            </div>
        </div>
    );
}

export default Receita3;
