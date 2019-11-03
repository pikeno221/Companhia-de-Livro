import React, { Component } from 'react'

import config, { storage } from './../firebase-config'

class AdminPortifolio extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{padding:'120px'}}>
                <h2> Portifolio Administrativo </h2>

                <form>
                    <div className="form-group">
                        <label for="titulo">Titulo</label>
                        <input type="text" className="form-control" id="titulo" placeholder="Titulo" />

                    </div>
                    <div className="form-group">
                        <label for="descricao">Descrição</label>
                        <textarea className="form-control" id="descricao" rows="3" placeholder="Descrição"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="imagem">Imagem</label>
                        <input type="file" className="form-control-file" id="imagem" />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>

        )
    }
}

export default AdminPortifolio