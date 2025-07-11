import boloChocolate from '../assets/bolochocolate.png'
import { useNavigate } from "react-router-dom";
function Receita1 () {
    let navigate = useNavigate();
      function handleHome() {
        navigate("/");
      }
      
    return (
        <>
         <div>
            <img src={boloChocolate} alt="Bolo de Chocolate" />
        </div>

        <div>
            <h1>Receita 1</h1>
        </div>
           <h2>Bolo de Chocolate</h2>   
           <p>Ingredientes:</p>   
             <p>
                Bolo:
75g de chocolate negro partido em pedaços
2 colheres de chá de café solúvel em pó
100g de cacau em pó
350ml de leite previamente misturado com 1 colher de sopa de sumo de limão (para fazer buttermilk)
375g de farinha
2 colheres de chá de bicarbonato de sódio
½ colher de chá de fermento em pó
3 ovos
500g de açúcar amarelo
175ml de óleo vegetal
2 colheres de chá de extrato de baunilha

Caramelo Salgado:
175g de açúcar amarelo
120ml de natas
½ colher de chá de flôr de sal
120g de manteiga

Ganache e Mousse:
400ml de natas
3 colheres de sopa de açúcar amarelo
2 colheres de sopa de mel
2 colheres de chá de extrato de baunilha
600g de chocolate negro partido finamente
40g de manteiga
             </p>
             <button  onClick={handleHome}>Home</button>
        </>
       
    )
}

export default Receita1