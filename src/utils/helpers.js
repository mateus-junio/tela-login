import { SplitButton } from "react-bootstrap"

const BASE_IMAGE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/:ID_IMAGE:.png'
//SplitButton
export function getImagePokemon(url) {
const urlArray = url.split('/')
return BASE_IMAGE.replace(':ID_IMAGE:', urlArray[6])

}