import { useNavigate } from "react-router-dom";
import salada from '../assets/salada.png';

function Receita3() {
    const navigate = useNavigate();

    function handleHome() {
        navigate("/");
    }

    return (
        <div >
            <div>
                <img src={salada} alt="Salada Mediterranean"/>

                <div>
                    <h1 >Salada Mediterranean</h1>

                    <p >Ingredientes:</p>

                    <div >
                        <p>
                           Grão-de-bico: O feijão enlatado é um verdadeiro salva-vidas quando se trata de um alimento básico favorito na despensa. Cada lata padrão de 425g de grão-de-bico vem repleta de fibras e proteínas, fornecendo uma dose dupla de nutrição real e acessível nos 30 segundos necessários para abrir uma lata, escorrer e enxaguar. Eles podem ser consumidos direto da lata, tornando esta uma receita muito adequada para o verão naqueles dias muito quentes, quando você simplesmente não consegue ligar o fogo. Eu sei que esta é uma salada de "grão-de-bico", mas você pode trocar o grão-de-bico pelo seu feijão enlatado favorito: feijão-branco cremoso, feijão-preto e feijão-carioca são ótimas opções.
                        </p>

                        <p >
                            Vegetais: Pepino picado, pimentão vermelho, cebola roxa e azeitonas Kalamata são meus ingredientes favoritos para esta salada. Embora eu adore esta salada como ela é, se você quiser substituir algum dos ingredientes da salada pelo seu acompanhamento preferido, temos a sua bênção. Não gosta de azeitonas ou pimentões? Tomates-cereja ou abacate maduro em cubos preencherão essa lacuna de sabor.
                        </p>

                        <p >
                            Queijo feta: Quer manter a dieta sem laticínios? Substitua o queijo feta por outra forma de proteína, como alguns ovos cozidos ou uma lata de atum, ou um punhado de nozes torradas e picadas.
                        </p>

                        <p >
                        O Molho: Eu criei um molho simples para acompanhar toda esta salada com azeite extravirgem, vinagre de vinho branco, suco de limão fresco, salsa fresca picada e flocos de pimenta vermelha. Adoro a simplicidade e o equilíbrio de sabores, mas há algumas coisas a serem observadas aqui. Recomendo fortemente o uso de suco de limão fresco para obter o melhor sabor possível; se você não gosta de pimenta, pode reduzir os flocos de pimenta vermelha ou ajustar a gosto. Use seu azeite extravirgem favorito ou confira nosso ranking das melhores marcas de azeite.
                        </p>
                    </div>

                    <button onClick={handleHome}>
                        Voltar para Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Receita3;
