import React, { Component } from 'react'
import Hello from './components/Hello'
import Game from './components/Game'

export default class App extends Component {
    render () {
        return (
            <div>
                <Hello />
                <Game />
            </div>
        )
    }
}