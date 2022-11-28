import { useNavigate } from 'react-router'

function withRouter(WrapperComponent) {
	return function(props) {
		const navigate = useNavigate()
		const router = {
			navigate
		}

		return <WrapperComponent {...props} router={router} />
	}
}
export default withRouter