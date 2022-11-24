import React, { Component, memo, PureComponent } from 'react'

// export default class Sub extends Component {
// 	shouldComponentUpdate(nextProps, nextState) {
//         console.log(nextProps)
//         return true
//     }

// 	render() {
// 		// console.log('sub render')
// 		const { message } = this.props

// 		return (
// 			<div>
// 				<span>{message}</span>
// 			</div>
// 		)
// 	}
// }

const Sub = memo(function(props) {
    const { message } = props
    console.log('render..')
	return <div>
        <span>{message}</span>
    </div>
})

export default Sub