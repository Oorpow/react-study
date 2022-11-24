function VerifyLogin(OriginCpn) {
    return props => {
        const token = localStorage.getItem('token') || ''

        if (token) {
            return <OriginCpn />
        } else {
            return <h2>no auth</h2>
        }
    }
}

export default VerifyLogin