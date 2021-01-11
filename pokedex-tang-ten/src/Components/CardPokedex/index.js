import React from 'react';
import CardWrapper from '../PokeCard/styles';
import { Button, ButtonsContainer, Card, MainContainer, NavBar, PokemonContainer } from '../../Pages/PokeListPage/styles'

const CardPokedex = (props) => {
    const { imagem, nome, tipo } = props;

    return (
        <CardWrapper>
            <div> <img src={imagem} /> </div>
            <div> Nome: {nome} </div>
            <div> Tipos: {
                    tipo.map((tipos) => {
                      return (
                          <div> {tipos.type.name} </div>  
                    )}
                    )
                } </div>
            <ButtonsContainer>
                <Button>Deletar</Button>
                <Button>Ver Detalhes</Button>
            </ButtonsContainer>    
        </CardWrapper>
    )
}

export default CardPokedex;