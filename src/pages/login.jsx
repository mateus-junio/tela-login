import { Input } from '../components/ui/input'
import { Botao } from '../components/ui/botao'
const Login = () => {
    return (
        <div>
            <div className="container">

                <h1>Login</h1>

                <div className="form">
                    <Input label="E-mail" type="text" id="email" name="email" placeholder="Seu email" />
                    <Input label="Senha" type="password" id="password" name="password" placeholder="Sua senha" />
                    
                    <Botao>ACESSAR</Botao>
                </div>
            </div>
        </div>
    )
}

export default Login