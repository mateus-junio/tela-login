export default function Pokedex() {
    const pokemon = {
        name: 'Ditto',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png' //colar url 


    }

    const pokemons = [
        pokemon,
        pokemon,
        pokemon
    ]


    return (
        <div className="container">
            <h1>POKÉMONS</h1>

            <div className="row">
                {pokemons.map((poke, indice) => (
                    <div key={indice} className="col-12 col-sm-6 col-md-4">
                        <div className="card">
                            <img
                                className="bg-success" //rounded bg-primary
                                src={poke.image}
                                alt={poke.name}
                                title={poke.name}
                            />
                            <h2 className="text-center">{poke.name}</h2>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}