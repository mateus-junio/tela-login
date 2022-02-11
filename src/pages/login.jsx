import { Input } from '../components/ui/input'
import { Botao } from '../components/ui/botao'
import { useState } from 'react'

const Login = () => {
    const [valores, setValores] = useState({})

    //console.log('VALORES: ', valores)

    function handleSave() {
        if (valores.email && valores.password) {
            localStorage.setItem('USER', JSON.stringify(valores))
            window.location.reload()
        } else {
            alert('Preencher o campo Email e Senha')
        }
    }

    return (
        <div className="container">
            <div className='row'>
                <div className='col-12 col-md-4 offset-md-4'>

                    <h1>Login</h1>

                    <div className="form">
                        <Input setValue={setValores} value={valores.email} label="E-mail" type="text" id="email" name="email" placeholder="Seu email" />
                        <Input setValue={setValores} value={valores.senha} label="senha" type="password" id="password" name="password" placeholder="Sua senha" />
                        <Botao handleClick={handleSave}>Acessar</Botao>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login