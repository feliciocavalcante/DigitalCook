function LoginPage() {
    return(
<main>
        <form className='flex flex-col items-center border justify-center rounded-2xl p-6 w-full shadow-md min-h-screen'>
          <h1>Login DigitalCook</h1>
          <div>
            <input
              className='border rounded-md p-2 mb-3 text-sm'
              type="email"
              placeholder='Usuario'
            />
            <User size={20} />
          </div>
          <div>
            <input
              className='border rounded-md p-2 mb-3 text-sm'
              type="password"
              placeholder='Senha'
            />
            <Lock size={20} />
          </div>
          <div>
            <label>
              <input type="checkbox" name="" id="" />
              <span>lembrar senha</span>
            </label>
            <a href="">Esqueci minha senha</a>
          </div>

          <button type="submit">Login</button>
          
          <div>
            <p>Não tem uma conta?
              <a href="/cadastro" className='hover:underline'>Cadastre-se</a>
            </p>
          </div>
        </form>
      </main>

    )
}

export default LoginPage;