import React from 'react';
import { useState, useContext } from 'react';
import CardPokedex from '../../Components/CardPokedex/index';
import GlobalStateContext from '../../global/GlobalStateContext';
import PokedexWraper from './styles';
import './styles_css.css';

const PokedexPage = () => {

    const ObjectFromGlobalState = useContext(GlobalStateContext)


    return (
        <div className="fullpokedex">
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
    )
}

export default PokedexPage;