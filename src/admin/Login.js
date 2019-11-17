import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)

        this.email = null
        this.senha = null

        this.autenticaUsuario = this.autenticaUsuario.bind(this)
    }

    autenticaUsuario() {
        console.log(this.email.value)
        console.log(this.senha.value)
    }


    render() {
        return (
            <div style={{ padding: '120px' }} >

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" name="email" ref={ref => this.email = ref} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Senha</label>
                        <input type="password" name="senha" ref={ref => this.senha = ref} className="form-control" id="exampleInputPassword1" placeholder="Senha" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Acessar</label>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.autenticaUsuario}>Enviar</button>

            </div>
        )
    }
}
export default Login