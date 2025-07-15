import macarrao from '../assets/macarrao.png';
import { useNavigate } from "react-router-dom";

function Receita2() {
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
          src={macarrao}
          alt="Macarrão com molho cremoso de cogumelos"
        />
      </div>

      {/* Conteúdo */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center border-l-0 lg:border-l-2 border-amber-400 p-3 lg:p-6 space-y-2 overflow-y-auto">
        <h1 className="text-amber-400 text-2xl font-semibold text-center">Receita</h1>
        <h2 className="text-amber-400 text-lg font-medium text-center leading-snug">
          Macarrão com molho cremoso de cogumelos
        </h2>

        <p className="font-semibold text-sm mt-1">Ingredientes:</p>

        <div className="w-full px-2 text-xs space-y-1 max-h-[50vh] overflow-y-auto">
          <ul className="list-disc list-inside leading-tight">
            <li>1 colher de sopa de manteiga</li>
            <li>250g de cogumelos fatiados</li>
            <li>3 dentes de alho</li>
            <li>Tomilho (opcional)</li>
            <li>1/4 xícara de vinho branco</li>
            <li>1 ½ xícara de creme de leite fresco</li>
            <li>Sal e pimenta a gosto</li>
            <li>Parmesão a gosto</li>
            <li>200g de massa da sua preferência</li>
          </ul>
        </div>

        <button
          className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-1 px-4 rounded mt-2 text-xs" onClick={handleHome}>
          Voltar para Home
        </button>
      </div>
    </div>
  );
}

export default Receita2;
