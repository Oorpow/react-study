import { Component } from "react"

function EnhanceCpn(OriginCpn) {
	return (props) => {
		return <OriginCpn {...props} />
	}
}

function EnhanceClassCpn(OriginCpn) {
    return class extends Component {
        constructor() {
            super()

            this.state = {
                something: {
                    name: 'enhance',
                    age: 19
                }
            }
        }

        render() {
            const { something } = this.state

            return <OriginCpn {...something} />
        }
    }
}

export {
    EnhanceCpn,
    EnhanceClassCpn
}