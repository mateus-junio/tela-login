import 'bootstrap/dist/css/bootstrap.min.css'
import Login from '../pages/login'
import Pokedex from '../pages/pokedex'
import Card from '../components/ui/card'

//import '../assets/styles.css'
// function App () {
// }
// class App extends Component {
// }


const App = () => {
    const esta_logado = JSON.parse(localStorage.getItem('USER'))

    if (esta_logado) {
        return (
            <Pokedex />
        )
    }
    return <Login />
}

export default App

// console.log(esta_logado)
// //JSON.stringfy() // transforma o objeto em string
// // JSON.parse() // transforma a string em um objeto
//     return (
//         <>
//         <Login />
//         </>
//     )




