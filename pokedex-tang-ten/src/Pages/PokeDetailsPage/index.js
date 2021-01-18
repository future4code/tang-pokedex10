import React, {useState, useContext} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import GlobalStateContext from '../../global/GlobalStateContext';
import {NavBar, MainContainer, Button, PokemonContainer, CardWrapper, Picture} from './styles';

const PokeDetailsPage = (props) => {
  const {imagem, nome, tipo} = props;
  const ObjectFromGlobalState = useContext(GlobalStateContext)
  const history = useHistory();
  const pathParams = useParams();

  const pokemonAtual = ObjectFromGlobalState.data.pokemons.filter((poke) => {
    if (poke.name == pathParams.name) {return true} else {return false}
  })
  
  const handleRouter = () => {
    history.goBack();
}
console.log(pokemonAtual)
  return (
   
    <MainContainer>
      <NavBar>
        {/* ao invés do Link coloquei o useHistory em uma função, porque a pessoa pode partir tanto do root quanto da pokedex,
        então é melhor se ela simplesmente voltar para página anterior ao invés de voltar sempre para o root*/}
         <Button onClick={handleRouter}>Voltar</Button>
       
       <h1>{pokemonAtual[0].name} - Detalhes</h1>
      </NavBar>
      

      <Picture>
        <img src={pokemonAtual[0].sprites.front_default} />
      </Picture>

        
      <PokemonContainer>
        <CardWrapper>
          <p>Poderes</p>
          <ul>
            {pokemonAtual[0].moves.map((move) => {
              return (
                <li>{move.move.name}</li>
              )
            }
            )
            }
          </ul>
        </CardWrapper>

        <CardWrapper>
        <p>Specs</p>
        <ul>
          {pokemonAtual[0].stats.map((statistic) => {
              return(
                <li> {statistic.stat.name}: {statistic.base_stat} </li>
              )
            })
          }
        </ul> 
        </CardWrapper>

      </PokemonContainer>
        
          
      
      

    </MainContainer>
      
    )
  }

//teste

export default PokeDetailsPage