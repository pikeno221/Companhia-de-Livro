import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AdminMenu from './AdminMenu'
import AdminPortifolio from './AdminPortifolio'
import { auth } from './../firebase-config'

class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaLogando: true,
            estaAutendicado: false,
            user: null
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({
                estaLogando: false,
                estaAutendicado: !!user,
                user
            })

        })
    }
    render() {
        if (this.state.estaLogando) {
            return (
                <div className="container">
                    return <p>aguarde ...</p>
                </div>
            ) 
        }
        if (!this.state.estaAutendicado) {
            return <Redirect to='/Login' />
        }

        return (
            <div className="container">
                <h2> Painel Admin </h2>
                <Route path={`/`} component={AdminMenu} />
                <Route path={`${this.props.match.url}/portifolio`} component={AdminPortifolio} />

            </div>
        )
    }
}
export default Admin