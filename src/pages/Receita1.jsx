import boloChocolate from '../assets/bolochocolate.png';
import { useNavigate } from "react-router-dom";

function Receita1() {
    const navigate = useNavigate();

    function handleHome() {
        navigate("/");
    }

    return (
        <div className="flex w-full h-screen bg-black overflow-auto">
  <div className="flex flex-col md:flex-row justify-center items-center w-full p-6">
    {/* Imagem do Bolo */}
    <div className="flex justify-center items-center md:ml-10 mb-6 md:mb-0">
      <img
        className="rounded-xl max-w-[400px] object-cover"
        src={boloChocolate}
        alt="Bolo de Chocolate"
      />
    </div>

    {/* Conteúdo da Receita */}
    <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 items-center border-2 border-amber-400 rounded-xl p-6">
      <h1 className="text-amber-400 text-[40px] font-medium">Receita</h1>
      <h2 className="text-amber-400 text-[25px] font-medium">Bolo de Chocolate</h2>

      <p className="text-white text-[18px] font-medium">Ingredientes:</p>

      <div className="text-white text-[15px] font-medium ml-4 space-y-4">
        <div>
          <p className="text-amber-400 font-semibold">Bolo:</p>
          <p>
            75g de chocolate negro partido em pedaços<br />
            2 colheres de chá de café solúvel em pó<br />
            100g de cacau em pó<br />
            350ml de leite com 1 colher de sopa de limão (buttermilk)<br />
            375g de farinha<br />
            2 colheres de chá de bicarbonato de sódio<br />
            ½ colher de chá de fermento em pó<br />
            3 ovos<br />
            500g de açúcar amarelo<br />
            175ml de óleo vegetal<br />
            2 colheres de chá de extrato de baunilha
          </p>
        </div>

        <div>
          <p className="text-amber-400 font-semibold">Caramelo Salgado:</p>
          <p>
            175g de açúcar amarelo<br />
            120ml de natas<br />
            ½ colher de chá de flor de sal<br />
            120g de manteiga
          </p>
        </div>

        <div>
          <p className="text-amber-400 font-semibold">Ganache e Mousse:</p>
          <p>
            400ml de natas<br />
            3 colheres de sopa de açúcar amarelo<br />
            2 colheres de sopa de mel<br />
            2 colheres de chá de extrato de baunilha<br />
            600g de chocolate negro partido finamente<br />
            40g de manteiga
          </p>
        </div>
      </div>

      <button
        className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded mt-5"
        onClick={handleHome}
      >
        Voltar para Home
      </button>
    </div>
  </div>
</div>


    );
}

export default Receita1;
