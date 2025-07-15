import { useNavigate } from "react-router-dom";
import salada from '../assets/salada.png';

function Receita3() {
  const navigate = useNavigate();

  function handleHome() {
    navigate("/");
  }

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen bg-black text-white overflow-hidden">
      {/* Imagem */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-3">
        <img
          className="rounded-lg w-[90%] max-w-[300px] object-cover"
          src={salada}
          alt="Salada Mediterranean"
        />
      </div>

      {/* Conteúdo */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center border-l-0 lg:border-l-2 border-amber-400 p-3 lg:p-6 overflow-y-auto">
        <h1 className="text-amber-400 text-2xl font-semibold text-center">Receita</h1>
        <h2 className="text-amber-400 text-lg font-medium text-center leading-tight mb-2">
          Salada Mediterranean
        </h2>

        <p className="text-white font-semibold text-sm mb-2">Ingredientes:</p>

        <div className="text-white text-xs space-y-3 px-2 max-h-[50vh] overflow-y-auto leading-snug text-justify">
          <p>
            <span className="text-amber-400 font-bold block mb-1">Grão-de-bico:</span>
            Feijão enlatado é prático e nutritivo. Cada lata de 425g fornece fibras e proteínas. Pode ser substituído por feijão-branco, feijão-preto ou carioca.
          </p>
          <p>
            <span className="text-amber-400 font-bold block mb-1">Vegetais:</span>
            Pepino, pimentão, cebola roxa e azeitonas Kalamata. Pode trocar por tomate-cereja ou abacate maduro.
          </p>
          <p>
            <span className="text-amber-400 font-bold block mb-1">Queijo feta:</span>
            Pode ser substituído por ovos cozidos, atum enlatado ou nozes picadas.
          </p>
          <p>
            <span className="text-amber-400 font-bold block mb-1">Molho:</span>
            Azeite extravirgem, vinagre de vinho branco, suco de limão, salsa fresca e flocos de pimenta vermelha. Ajuste o sabor conforme seu gosto.
          </p>
        </div>

        <button
          className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-1 px-4 rounded mt-4 text-xs"
          onClick={handleHome}
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
}

export default Receita3;
