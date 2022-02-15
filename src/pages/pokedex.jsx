import { getImagePokemon } from "../utils/helpers"
import { useEffect, useState } from "react"
import { Card } from "../components/ui/card"
const API_URL = 'https://pokeapi.co/api/v2'
const BASE_IMAGE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/:ID_IMAGE:.png'

//async await
/* .then() // resultado OK
   .catch() // resultado ERROR */
/*fetch('https://pokeapi.co/api/v2/pokemon?limit=12&offset=1')
     .then() // resultado OK
     .catch() // resultado ERROR */
export default function Pokedex() {
    const [pokemons, setPokemons] = useState([]) //array de pokémons

    useEffect(() => {
        async function chamarPokemons() {
            try {
                const promise = await fetch(API_URL + '/pokemon?limit=12&offset=0')
                const resultado = await promise.json()

                setPokemons(resultado.results)
            } catch (error) {
                console.log('deu erro')
            }
        } chamarPokemons()
    }, [])
    //Sempre que usar o useEffect usar o array [] mesmo vazio, caso contrário entram em loop. 
    return (
        <div className="container">
            <h1>Pokémons</h1>

            <div id="cards" className="row">
                {pokemons.map((poke, indice) => (
                    <Card
                        key={indice}
                        {...poke}
                        image={getImagePokemon(poke.url)} />
                ))}
            </div>
        </div>
    )
}