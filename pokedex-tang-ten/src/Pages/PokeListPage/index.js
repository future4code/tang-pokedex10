import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, ButtonsContainer, Card, MainContainer, NavBar, PokemonContainer } from './styles'
import GlobalStateContext from '../../global/GlobalStateContext';



const PokeListPage = () => {
  const ObjectFromGlobalState = useContext(GlobalStateContext)
  const history = useHistory();


  const AddToPokedex = (i) => {
    const pokemonAdd = ObjectFromGlobalState.data.pokemons.filter((pokemon) =>{
      if (pokemon.id == i) {return true}
    })

    /*Criando função para verificar duplicatas, vou somar um numero que deverá ser zero caso o pokemon não esteja na lista */
    let checarDuplicatas = 0;
    ObjectFromGlobalState.data.pokedex.map((pokemon) => {
      if(pokemon[0].id == i) {
        checarDuplicatas = checarDuplicatas + 1;
      }
    })
    /*________________________________________________________________________________________________________________*/

    const newPokedex = checarDuplicatas ? [...ObjectFromGlobalState.data.pokedex] : [...ObjectFromGlobalState.data.pokedex, pokemonAdd];
    ObjectFromGlobalState.data.setPokedex(newPokedex) 
    console.log(newPokedex)
  }


  /*A partir daqui são as funções para as rotas de detalhes dos pokemons*/

    const detalhar = (nome) => {
      history.push("/pokemon/"+nome)
      console.log('função ok')
    }

  /*____________________________________________________________________*/

  return (
    <MainContainer>
      <NavBar>
        <Link to={'/pokedex'}>
          <Button >Ir para PokéDex</Button>
        </Link>
        <h1>Lista de pokémons</h1>
      </NavBar>
      <PokemonContainer>
        {ObjectFromGlobalState.data.pokemons.map((poke) => {
          return (
            <Card key={poke.id} pokemon={poke}>
              <img src={poke.sprites && poke.sprites.front_default} alt={poke.name} />
              <p>{poke.name}</p>
              <ButtonsContainer>
                <Button onClick={() => {AddToPokedex(poke.id)}  }>Adicionar à pokédex</Button>
                <Button onClick={() => {detalhar(poke.name)}}>Ver detalhes</Button>
              </ButtonsContainer>
            </Card>
          )
        })}
      </PokemonContainer>
    </MainContainer>
  )
}

export default PokeListPage