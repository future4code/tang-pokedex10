import {Switch, Route, BrowserRouter } from 'react-router-dom';


const Router = () => {
    return(
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    {/*Inserir aqui o componente da pokedex*/}
                </Route>
                <Route exact path="/pokedex">
                    {/*Inserir aqui o componente da pokedex*/}
                </Route>
                <Route exact path="/listagem">
                    {/*Inserir aqui o componente da listagem de todos os 
                    pokemons*/}
                </Route>
                <Route exact path="/detalhes/:id">
                    {/*Inserir aqui o componente de detalhes do pokemons
                    notar que vamos usar parametros aqui para dizer qual
                    pokemon abrir*/}
                </Route>
                <Route>
                    {/*Inserir aqui a página de Erro 404*/}
                </Route>

            </Switch>
        </BrowserRouter>
    )
}