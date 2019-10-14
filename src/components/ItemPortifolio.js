import React from 'react'

const ItemPortifolio = props => {
    return (
        <div className='col-sm-4'>
            <div className='thumbnail'>
                <img src='paris.jpg' alt='' width='400' height='300' />
                <p><strong>{props.conteudo.titulo}</strong></p>
                <p>{props.conteudo.descricao}</p>
                
            </div>
        </div>
    )
}

export default ItemPortifolio