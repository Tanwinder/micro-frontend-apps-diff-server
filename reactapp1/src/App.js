import React, { Component } from 'react';
import NewComp from './NewComp';

export class App extends Component {

    render() {
        return (
            <div>
                <div className="card bg-light mb-3">
                <div className="card-header">React App 1</div>
                <div className="card-body">
                    <h5 className="card-title">this is react app 1</h5>
                    <p className="card-text">we can add some text here of text.</p>
                </div>
                <NewComp />
                </div>
            </div>
        )
    }
}
