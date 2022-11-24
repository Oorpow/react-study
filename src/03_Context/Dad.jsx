import React, { Component } from 'react'
import AppContext from './context/AppContext'

export default class Dad extends Component {
	render() {
		return <div>
            <AppContext.Consumer>
                {
                    value => {
                        const { name, info } = value
                        return <span>name: {name}, info: {info}</span>
                    }
                }
            </AppContext.Consumer>
        </div>
	}
}
