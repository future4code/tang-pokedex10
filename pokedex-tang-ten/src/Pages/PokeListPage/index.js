import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../Constants';
import { Button, ButtonsContainer, Card, MainContainer, NavBar, PokemonContainer } from './styles'
import axios from 'axios';

const PokeListPage = () => {
  const [pokemons, setPokemons] = useState([{}])

  const getPokemonsList = () => {

    axios.get(`${BASE_URL}/pokemon`)
      .then((response) => {
        setPokemons(response.data.results)
        // console.log(response.data.results);
      }).catch((error) => {
        alert(error)
      })
  }

  useEffect(() => {
    getPokemonsList()
  }, [])

  return (
    <MainContainer>
      <NavBar>
        <Link to={'/'}>
          <Button >Ir para PokéDex</Button>
        </Link>
        <h1>Lista de pokémons</h1>
      </NavBar>
      <PokemonContainer>
        {pokemons && pokemons.map((pokemon) => {
          return (
            <Card key={pokemon.name}>
              <p>{pokemon.url}</p>
              <p>{pokemon.name}</p>
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