import { Input } from '../components/ui/input'
import { Botao } from '../components/ui/botao'
import { useState } from 'react'

const Login = () => {
    let variavel = "meu nome é Marcos"

    const [param_1, param_2] = useState('VALOR_INICIAL')
    //param 1 valor da minha variavel
    //param 2 funcao

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    console.log('EMAIL: ', email)
    console.log('SENHA: ', senha)

    return (        
            <div className="container">

                <h1>Login</h1>

                <div className="form">
                    <Input setValue={setEmail} label="E-mail" type="text" id="email" name="email" placeholder="Seu email" />
                    <Input setValue={setSenha} label="senha" type="password" id="password" name="password" placeholder="Sua senha" />
                    <Botao>ACESSAR</Botao>
                </div>
            </div>        
    )
}

export default Login