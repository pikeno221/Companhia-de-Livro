import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { auth } from './../firebase-config'

class Login extends Component {
    constructor(props) {
        super(props)

        this.email = null
        this.senha = null

        this.state = {
            estaAutenticado: false,
            estaLogando: true,
            erro: false
        }

        this.autenticaUsuario = this.autenticaUsuario.bind(this)
    }

    autenticaUsuario() {
        auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
            .then(user => {
                console.log('Usuario Logado -> ', user)
                this.setState({ estaAutenticado: true, estaLogando: false, erro: false })
            })
            .catch(err => {
                this.setState({ erro: true, estaLogando:true, estaAutenticado: false})
                console.log('Error -> ', err)
            })
    }


    render() {
        if (this.state.estaAutenticado) {
            return <Redirect to='/admin' />

        }
        return (
            <div style={{ padding: '120px' }} >

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" name="email" ref={ref => this.email = ref} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input type="password" name="senha" ref={ref => this.senha = ref} className="form-control" id="exampleInputPassword1" placeholder="Senha" />
                    {this.state.erro && <small id="errorCredentials" className="form-text text-muted">Usuario e/ou Senha incorretos</small>}
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Acessar</label>
                </div>
                <button type="button" disabled={!this.state.estaLogando} className="btn btn-primary" onClick={this.autenticaUsuario}>Enviar</button>

            </div>
        )
    }
}
export default Login