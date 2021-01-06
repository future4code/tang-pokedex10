import React from 'react';

const CardPokedex = (props) => {
    const {imagem, nome, tipo} = props;

    return(
        <div>
            <div> {imagem}  </div>
            <div> Nome: {nome} </div>
            <div> Tipo: {tipo} </div>
        </div>
    )
}

export default CardPokedex;