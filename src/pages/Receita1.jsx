import boloChocolate from '../assets/bolochocolate.png';
import { useNavigate } from "react-router-dom";

function Receita1() {
  const navigate = useNavigate();

  function handleHome() {
    navigate("/");
  }

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen bg-black text-white overflow-hidden">
      {/* Imagem */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-2">
        <img
          className="rounded-lg w-[90%] max-w-[300px] object-cover"
          src={boloChocolate}
          alt="Bolo de Chocolate"
        />
      </div>

      {/* Conteúdo */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center border-l-0 lg:border-l-2 border-amber-400 p-3 lg:p-6 space-y-2 overflow-y-auto">
        <h1 className="text-amber-400 text-2xl font-semibold text-center">Receita</h1>
        <h2 className="text-amber-400 text-lg font-medium text-center">Bolo de Chocolate</h2>

        <p className="text-white font-semibold mt-1 text-sm">Ingredientes:</p>

        <div className="w-full px-2 text-xs space-y-2 overflow-y-auto max-h-[60vh]">
          {/* Bolo */}
          <div>
            <p className="text-amber-400 font-semibold mb-1">Bolo:</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>75g de chocolate negro</li>
              <li>2 c. chá café solúvel</li>
              <li>100g cacau em pó</li>
              <li>350ml leite + limão</li>
              <li>375g farinha</li>
              <li>2 c. chá bicarbonato</li>
              <li>½ c. chá fermento</li>
              <li>3 ovos</li>
              <li>500g açúcar amarelo</li>
              <li>175ml óleo</li>
              <li>2 c. chá baunilha</li>
            </ul>
          </div>

          {/* Caramelo */}
          <div>
            <p className="text-amber-400 font-semibold mb-1">Caramelo Salgado:</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>175g açúcar amarelo</li>
              <li>120ml natas</li>
              <li>½ c. chá flor de sal</li>
              <li>120g manteiga</li>
            </ul>
          </div>

          {/* Ganache */}

        </div>

        <button
          onClick={handleHome}
          className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-1 px-4 rounded mt-2 text-xs"
        >
          Voltar para Home
        </button>
      </div>
    </div>

  );
}

export default Receita1;
