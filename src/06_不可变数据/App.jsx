import React, { PureComponent, Component } from 'react'

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			bookList: [
				{ id: 1, name: 'book1', num: 1 },
				{ id: 2, name: 'book2', num: 2 },
				{ id: 3, name: 'book3', num: 3 },
			],
		}
	}

    addNewBook() {
        const newList = [...this.state.bookList]
        newList.push({
            id: 4,
            name: 'book4',
            num: 4
        })

        this.setState({
            bookList: newList
        })
    }

	render() {
        console.log('zhixing lou')
        const { bookList } = this.state

		return <div>
            <ul>
                {
                    bookList.map(item => {
                        return (
                            <li key={item.id}>name: {item.name} || num: {item.num}</li>
                        )
                    })
                }
            </ul>
            <button onClick={e => this.addNewBook()}>添加一条新数据</button>
        </div>
	}
}

export default App
