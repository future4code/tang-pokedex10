import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import CardPokedex from '../../Components/CardPokedex/index';
import GlobalStateContext from '../../global/GlobalStateContext';
import {PokedexWraper, Button, NavBar} from './styles';
import './styles_css.css';

const PokedexPage = () => {

    const history = useHistory();
    const ObjectFromGlobalState = useContext(GlobalStateContext)
    const handleRouter = () => {
        history.goBack();
    }
    

    return (
        <div className="fullpokedex">
            
            <NavBar>
                <Button onClick={handleRouter}> Voltar </Button>
                <h1 className='header'>Pokedex</h1>
            </NavBar>

            <div className="pokemons">
            {ObjectFromGlobalState.data.pokedex.map((pokemon) => {
                return (
                    <PokedexWraper>
                    <CardPokedex
                        key={pokemon[0].id}
                        imagem={pokemon[0].sprites && pokemon[0].sprites.front_default}
                        nome={pokemon[0].name}
                        tipo={pokemon[0].types}
                        id={pokemon[0].id}
                    />
                    </PokedexWraper>
                    
                )
            }
            )
            }
            </div>
            

        </div>
    )
}

export default PokedexPage;