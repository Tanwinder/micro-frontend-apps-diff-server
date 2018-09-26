import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BothApps extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <react-app1></react-app1>
                <react-app2></react-app2>
            </div>
        )
    }
}

BothApps.propTypes = {

}

export default BothApps