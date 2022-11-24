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
			checkedHobbies: {},
            checkedMultipleHobbies: []
		}
	}

	selectOne(e) {
		console.log(e.target.value)
	}

	checkHobby(e) {
		console.log(e.target.value)
	}
    
    selectMultipl(e) {
        const selected = Array.from(e.target.selectedOptions, item => item.value)
        // const values = selected.map(item => item.value)

        this.setState({
            checkedMultipleHobbies: selected
        })
    }

    getMutiple() {
        console.log(this.state.checkedMultipleHobbies)
    }

	render() {
		const { hobbies, checkedHobbies } = this.state

		return (
			<div>
				{/* 单选 */}
				<select
					name=""
					id=""
					value={checkedHobbies}
					onChange={(e) => this.selectOne(e)}
				>
					{hobbies.map((item) => (
						<option value={item.value} key={item.id}>
							{item.value}
						</option>
					))}
				</select>
				{/* 多选 */}
				<br />
				<select multiple value={hobbies} onChange={e => this.selectMultipl(e)}>
					{hobbies.map((item) => (
						<option value={item.value} key={item.id}>
							{item.value}
						</option>
					))}
				</select>

                <button onClick={e => this.getMutiple()}>获取多选的值</button>
			</div>
		)
	}
}

export default App
