import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {NavBar, MainContainer, Button, PokemonContainer, CardWrapper} from './styles'

const PokeDetailsPage = (props) => {
  const {imagem, nome, tipo} = props;
  


  return (
   
    <MainContainer>
      <NavBar>
       <Link to={'/'}>
         <Button >Voltar</Button>
       </Link>
       <h1>Detalhes</h1>
      </NavBar>

      <PokemonContainer>

        <CardWrapper>
          <p>Poderes</p>
        </CardWrapper>

        <CardWrapper>
         <p>Força de Ataque</p> 
        </CardWrapper>

      </PokemonContainer>

    </MainContainer>
  )
  }

//teste

export default PokeDetailsPage