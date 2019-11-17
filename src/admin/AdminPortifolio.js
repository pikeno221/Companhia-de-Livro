import React, { Component } from 'react'

import config, { storage } from './../firebase-config'

class AdminPortifolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaGravando: false

        }
        this.gravaPortifolio = this.gravaPortifolio.bind(this)
    }

    gravaPortifolio(e) {
        this.setState({estaGravando: true});
        const itemPortifolio = {
            titulo: this.titulo.value,
            descricao: this.descricao.value,
            imagem: this.imagem
        }

        const arquivo = itemPortifolio.imagem.files[0];
        const { name, size, type } = arquivo;
        console.log('passou');

        const ref = storage.ref(name)
        ref.put(arquivo)
            .then(img => {
                img.ref.getDownloadURL()
                    .then(downloadURL => {
                        console.log(downloadURL)
                        const novoPortifolio = {
                            titulo: itemPortifolio.titulo,
                            descricao: itemPortifolio.descricao,
                            imagem: downloadURL
                        }

                        config.push('portifolio', {
                            data: novoPortifolio
                        })
                        this.setState({estaGravando: false})
                    })

            })

        e.preventDefault();
    }

    render() {
        if (this.state.estaGravando) {
            return (
                <div className="container">
                    <p><span className="glyphincon glyphincon-refresh"> Aguarde ... </span></p>
                </div>
            )
        }
        return (
            <div className="container">
                <h2> Portifolio Administrativo </h2>

                <form onSubmit={this.gravaPortifolio}>
                    <div className="form-group">
                        <label htmlFor="titulo">Titulo</label>
                        <input type="text" className="form-control" id="titulo" placeholder="Titulo" ref={(ref) => this.titulo = ref} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea className="form-control" id="descricao" rows="3" placeholder="Descrição" ref={(ref) => this.descricao = ref}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagem">Imagem</label>
                        <input type="file" className="form-control-file" id="imagem" ref={(ref) => this.imagem = ref} />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div >

        )
    }
}

export default AdminPortifolio