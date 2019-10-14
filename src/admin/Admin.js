import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import AdminMenu from './AdminMenu'
import AdminPortifolio from './AdminPortifolio'
class Admin extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h2> Painel Admin </h2>
                <Route path={`/`} component={AdminMenu} />
                <Route path={`${this.props.match.url}/portifolio`} component={AdminPortifolio} />

            </div>
        )
    }
}
export default Admin