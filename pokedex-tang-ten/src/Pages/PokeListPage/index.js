import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonsContainer, Card, MainContainer, NavBar, PokemonContainer } from './styles'
import GlobalStateContext from '../../global/GlobalStateContext';


const PokeListPage = () => {
  const ObjectFromGlobalState = useContext(GlobalStateContext)

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
                <Button>Adicionar à pokédex</Button>
                <Button>Ver detalhes</Button>
              </ButtonsContainer>
            </Card>
          )
        })}
      </PokemonContainer>
    </MainContainer>
  )
}

export default PokeListPage