import macarao from '../assets/macarrao.png'
import { useNavigate } from "react-router-dom";

function Receita2 () {
   
    let navigate = useNavigate();
      function handleHome() {
        navigate("/menu");
      }

    return (
        <>
        <div>
            <img src={macarao} alt="Macarrão com molho cremoso de cogumelos" />
        </div>

        <h1>Receita 2</h1>
        <h2>Macarrão com molho cremoso de cogumelos</h2>
        <p>
            Ingredientes:
        </p>
        <p>
            1 colher de sopa de manteiga
250g de cogumelos fatiados
3 dentes de alho
Tomilho (opcional)
1/4 xícara de vinho branco
1 e 1/2 xícara de creme de leite fresco
Sal e pimenta do reino a gosto
Parmesão a gosto
200g de massa de sua preferência
        </p>

        <button onClick={handleHome}>Home</button>
        </>
    )
}

export default Receita2