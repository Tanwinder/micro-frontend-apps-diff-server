import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Switch, Route } from 'react-router-dom'
import FirstApp from './firstapp'
import SecondApp from './secondapp'
import BothApps from './bothapps';

class App extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
               <app-header></app-header>
            <div className="row app-container">
                <div className="col-sm app-sidebar">
                    <Link to='/app1' className="btn btn-default" data-app="react-app1">React App-1</Link>
                    <Link to='app2' className="btn btn-default" data-app="react-app2">React App-2</Link>
                    <Link to="/bothapps" className="btn btn-default" data-app="both">Both</Link>
                </div>
                <div className="col-sm app-content">
                    <div id="main">
                    <Switch>
                    <Route path="/app1" component={FirstApp} />
                    <Route path="/app2" component={SecondApp} />
                    <Route path="/bothapps" component={BothApps} />
                    </Switch>
                    </div>
                </div>
            </div>
        <app-footer></app-footer> 
            </div>
        )
    }
}

App.propTypes = {

}

export default App