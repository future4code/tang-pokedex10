import React from 'react';
import {useHistory} from 'react-router-dom';
import CardWrapper from '../PokeCard/styles';
import {useContext } from 'react';
import { Button, ButtonsContainer} from '../../Pages/PokeListPage/styles'
import GlobalStateContext from '../../global/GlobalStateContext';

const CardPokedex = (props) => {
    const { imagem, nome, tipo, id} = props;
    const ObjectFromGlobalState = useContext(GlobalStateContext);
    const history = useHistory();

    const deletePokemon = (i) => {
        //console.log(i)
        const newPokedex = ObjectFromGlobalState.data.pokedex.filter((pokemon) =>{
            if (pokemon[0].id === i) {return false} else {return true}
          })
          ObjectFromGlobalState.data.setPokedex(newPokedex) 
    }

    const detalhar = (nome) => {
        history.push("/pokemon/"+nome)
        console.log('função ok')
      }

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
                <Button onClick={() => {deletePokemon(id)}}>Deletar</Button>
                <Button onClick={() => {detalhar(nome)}}>Ver Detalhes</Button>
            </ButtonsContainer>    
        </CardWrapper>
    )
}

export default CardPokedex;