import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../Constants';
import {NavBar} from './styles'
import { Card, PokemonContainer} from '../../Components/CardPokemon/styles';
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

  
  return(
    <div>
      <NavBar>
        <Link to={'/'}>
          <button >Ir para PokéDex</button>
        </Link>
        <h1>Pokémon List</h1>
      </NavBar>
      {pokemons && pokemons.map((pokemon) => {
        return (
          <PokemonContainer>
            <Card key={pokemon.name}>
              <p>{pokemon.url}</p>
              <p>{pokemon.name}</p>
            </Card>
          </PokemonContainer>
        )
      })}
    </div>
  )
}

export default PokeListPage