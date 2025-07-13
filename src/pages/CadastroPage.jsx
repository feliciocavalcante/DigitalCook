import { useNavigate } from "react-router-dom";
import { User, Lock } from "phosphor-react";
import { supabase } from "../supabaseClient"; 

function CadastroPage() {
  const navigate = useNavigate();

  async function handleCadastro(e) {
    e.preventDefault();

    const email = e.target[0].value;
    const senha = e.target[1].value;

    const { error } = await supabase.auth.signUp({
      email: email,
      password: senha,
    });

    if (error) {
      alert("Erro ao cadastrar: " + error.message);
    } else {
      alert("Cadastro realizado! Verifique seu e-mail.");
      navigate("/Login"); 
    }
  }

  return (
    <main className="min-h-screen bg-[#101010] flex items-center justify-center px-4">
      <form
        onSubmit={handleCadastro}
        className="flex flex-col gap-4 bg-[#1a1a1a] text-white border border-[#FE9A00] rounded-2xl p-8 w-full max-w-md shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center text-[#FE9A00] mb-4">
          Criar Conta
        </h1>

        <div className="relative">
          <input
            className="w-full bg-transparent border border-gray-600 rounded-md p-3 pl-10 text-sm placeholder-gray-400 focus:outline-none focus:border-[#FE9A00]"
            type="email"
            placeholder="Email"
            required
          />
          <User
            size={20}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
          />
        </div>

        <div className="relative">
          <input
            className="w-full bg-transparent border border-gray-600 rounded-md p-3 pl-10 text-sm placeholder-gray-400 focus:outline-none focus:border-[#FE9A00]"
            type="password"
            placeholder="Senha"
            required
          />
          <Lock
            size={20}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
          />
        </div>

        <button
          type="submit"
          className="bg-[#FE9A00] text-[#101010] font-bold py-2 rounded-lg hover:bg-[#e88a00] transition"
        >
          Cadastrar
        </button>

        <div className="text-center text-sm text-gray-300 mt-2">
          <p>
            Já tem uma conta?{" "}
            <a
              href="#" onClick={(e) => {e.preventDefault();navigate("/Login");}}
              className="text-[#FE9A00] hover:underline">
              Fazer login
            </a>

          </p>
        </div>
      </form>
    </main>
  );
}

export default CadastroPage;
