import React, { Component } from 'react'

import config, { storage } from './../firebase-config'

class AdminPortifolio extends Component {
    constructor(props) {
        super(props)

        this.gravaPortifolio = this.gravaPortifolio.bind(this)
    }

    gravaPortifolio(e) {
        console.log('galo');
        console.log(this.titulo.value);
        console.log(this.descricao.value);
        console.log(this.imagem.value);
        e.preventDefault();


        const arquivo = this.imagem.files[0];
        const { name, size, type } = arquivo;
        console.log('passou');

        const ref = storage.ref(name)
        ref.put(arquivo)
            .then(img => {
                img.ref.getDownloadURL()
                    .then(downloadURL => {
                        console.log(downloadURL)
                        const novoPortifolio = {
                            titulo: this.titulo.value,
                            descricao: this.descricao.value,
                            imagem: downloadURL
                        }

                        config.push('portifolio', {
                            data: novoPortifolio
                        })
                    })

            })
    }

    render() {
        return (
            <div style={{ padding: '120px' }} >
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