import boloChocolate from '../assets/bolochocolate.png';
import { useNavigate } from "react-router-dom";

function Receita1() {
    const navigate = useNavigate();

    function handleHome() {
        navigate("/");
    }

    return (
        <div>
            <div >
                <img src={boloChocolate}alt="Bolo de Chocolate" />

                <div>
                    <h1 >Receita </h1>
                    <h2 >Bolo de Chocolate</h2>

                    <p >Ingredientes:</p>
                    <div >
                        <p >Bolo:</p>
                        <p>
                            75g de chocolate negro partido em pedaços<br />
                            2 colheres de chá de café solúvel em pó<br />
                            100g de cacau em pó<br />
                            350ml de leite previamente misturado com 1 colher de sopa de sumo de limão (para fazer buttermilk)<br />
                            375g de farinha<br />
                            2 colheres de chá de bicarbonato de sódio<br />
                            ½ colher de chá de fermento em pó<br />
                            3 ovos<br />
                            500g de açúcar amarelo<br />
                            175ml de óleo vegetal<br />
                            2 colheres de chá de extrato de baunilha
                        </p>

                        <p>Caramelo Salgado:</p>
                        <p>
                            175g de açúcar amarelo<br />
                            120ml de natas<br />
                            ½ colher de chá de flôr de sal<br />
                            120g de manteiga
                        </p>

                        <p >Ganache e Mousse:</p>
                        <p>
                            400ml de natas<br />
                            3 colheres de sopa de açúcar amarelo<br />
                            2 colheres de sopa de mel<br />
                            2 colheres de chá de extrato de baunilha<br />
                            600g de chocolate negro partido finamente<br />
                            40g de manteiga
                        </p>
                    </div>

                    <button onClick={handleHome} >
                        Voltar para Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Receita1;
