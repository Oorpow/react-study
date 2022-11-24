import React, { createRef, PureComponent } from 'react'
import Forward from './Forward'

export class App extends PureComponent {
    constructor() {
        super()

        this.state = {
        }

        this.spanRef = createRef()
        this.spanEl = null
        // 自定义函数式组件中的某个元素
        this.cusRef = createRef()
    }

    getSpanDom() {
        // 1. refs获取
        // console.log(this.refs.spanRef)

        // 2. createRef this.ref.current
        // console.log(this.spanRef.current)

        // 3. 回调函数, 赋值给一个变量
        // console.log(this.spanEl)

        // 4. createRef 获取自定义函数式组件中的某个元素
        console.log(this.cusRef.current)
    }

	render() {
		return (
			<div>
                <span ref={this.spanRef}>spanRef</span>
				<span ref={el => this.spanEl = el}>cbRef</span>
                <button onClick={e => this.getSpanDom()}>获取span元素</button>
                <Forward ref={this.cusRef} />
			</div>
		)
	}
}

export default App
