import React, { Component } from 'react'
import AppContext from './context/AppContext'

export default class Child extends Component {
	static contextType = AppContext
    
    render() {
        console.log(this.context)
        
		return <div>Child</div>
	}
}
