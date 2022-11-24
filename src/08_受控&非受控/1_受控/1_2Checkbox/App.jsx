import React, { PureComponent } from 'react'

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			hobbies: [
				{ id: 1, value: 'vue', checked: false },
				{ id: 2, value: 'react', checked: false },
				{ id: 3, value: 'angular', checked: false },
			],
            checkedHobbies: []
		}
	}

	selectHobby(e, index) {
        const hobbies = [...this.state.hobbies]
        hobbies[index].checked = e.target.checked

        // 获取选中的hobby
        const checkedHobbies = hobbies.filter(item => item.checked)
        this.setState({
            hobbies,
            checkedHobbies
        })
	}

    getHobbies() {
        console.log(this.state.checkedHobbies)
    }

	render() {
		const { hobbies } = this.state

		return (
			<div>
				{hobbies.map((item, i) => (
					<label htmlFor={item.value} key={item.id}>
						<input
							type="checkbox"
                            id={item.value}
							value={item.value}
							checked={item.checked}
							onChange={(e) => this.selectHobby(e, i)}
						/>
                        {item.value}
					</label>
				))}
                <button onClick={e => this.getHobbies()}>获取选中的hobbies</button>
			</div>
		)
	}
}

export default App
