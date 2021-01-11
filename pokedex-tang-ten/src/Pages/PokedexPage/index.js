import React from 'react';
import { useState } from 'react';
import CardPokedex from '../../Components/CardPokedex/index';

const PokedexPage = () => {

    const exemploInicial = [
        {
            nome: "Charmander",
            tipo: "Fogo",
            imagemURL: "URL da Imagem"
        },
        {
            nome: "Squirtle",
            tipo: "Água",
            imagemURL: "URL da Imagem"
        }
    ]

    const [pokemonsSalvos, setPokemonsSalvos] = useState(exemploInicial);

    return (
        <div>
            {pokemonsSalvos.map((pokemon) => {
                return (
                    <CardPokedex
                        imagem={pokemon.imagemURL}
                        nome={pokemon.nome}
                        tipo={pokemon.tipo}
                    />
                )
            }
            )
            }
        </div>
    )
}

export default PokedexPage;