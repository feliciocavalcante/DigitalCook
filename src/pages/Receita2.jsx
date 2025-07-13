import macarao from '../assets/macarrao.png';
import { useNavigate } from "react-router-dom";

function Receita2() {
    const navigate = useNavigate();

    function handleHome() {
        navigate("/");
    }

    return (
        <div>
            <div>
                <img src={macarao} alt="Macarrão com molho cremoso de cogumelos"/>

                <div >
                    <h1 >Receita </h1>
                    <h2 >Macarrão com molho cremoso de cogumelos</h2>

                    <p >Ingredientes:</p>
                    <div >
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

                    <button onClick={handleHome} >
                        Voltar para Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Receita2;
