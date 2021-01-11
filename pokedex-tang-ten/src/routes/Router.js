import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PokeDetailsPage from '../Pages/PokeDetailsPage';
import PokedexPage from '../Pages/PokedexPage';
import PokeListPage from '../Pages/PokeListPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {/*Inserir aqui o componente da listagem de todos os 
                    pokemons*/}
                    <PokeListPage />
                </Route>

                <Route exact path="/pokedex">
                    <PokedexPage />
                </Route>

                <Route exact path="/pokemon/:name">
                    {/*Inserir aqui o componente de detalhes do pokemons
                    notar que vamos usar parametros aqui para dizer qual
                    pokemon abrir*/}
                    <PokeDetailsPage />
                </Route>

                <Route>
                    {/*Inserir aqui a página de Erro 404*/}
                    <div> Erro 404. Página não encontrada</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;