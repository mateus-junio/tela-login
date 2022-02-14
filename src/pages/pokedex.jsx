import {Card} from "../components/ui/card"

export default function Pokedex() {
    const pokemon = {
        name: 'Ditto',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png',
        order: 203 
    }
    //chamar a API de pokémon

    const pokemons = [
        {
            name: 'Mewtwo',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150_f2.png'
        },
        pokemon,
        pokemon,
        pokemon,
    ]
    return (
        <div className="container">
            <h1>Pokémons</h1>
            <div id="cards" className="row">
                {pokemons.map((poke, indice) => (
                    <Card key={indice} name={poke.name} image={poke.image}/>
                ))}
            </div>
        </div>
    )
}