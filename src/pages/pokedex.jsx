import { useEffect, useState } from 'react'
import { Card } from '../components/ui/card'
import { getImagePokemon } from '../utils/helpers'
import { Botao } from '../components/ui/botao'

const URL_INICIAL = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0'

export default function Pokedex () {
  const [dados, setDados] = useState(null)
  const [paginaAtual, setPaginaAtual] = useState(URL_INICIAL)
  
  useEffect(() => {
    async function chamarPokemons() {
      try {
        const promise = await fetch(paginaAtual)
        const resultado = await promise.json()

        setDados(resultado)
      } catch (error) {
        console.log('deu erro')
      }
    }
    chamarPokemons()
  }, [paginaAtual])

  if (dados == null) {
    return <p>Carregando os meus pokemon</p>
  }

  return (
    <div className="container">
      <h1 className='text-center'>Pokémon</h1>

      <div className="row">
        {dados?.results?.map((poke, index) => (
          <Card
            key={index}
            {...poke}
            image={getImagePokemon(poke.url)}
          />
        ))}
      </div>

      <div className="mb-5">
        {dados.previous && (
          <Botao
            noGroup
            className="me-3"
            handleClick={() => setPaginaAtual(dados.previous)}
          >VOLTAR</Botao>
        )}

        {dados.next && (
          <Botao
            noGroup={true}
            handleClick={() => setPaginaAtual(dados.next)}
          >AVANÇAR</Botao>
        )}
      </div>

    </div>
  )
}