import React, { memo, useContext, useEffect } from 'react'
import { ThemeContext, MsgContext } from './context'
import useScreenPos from './hooks/useScreenPos'

const Home = memo(() => {
    const [scrollX, scrollY] = useScreenPos()

    return (
        <div>
            <h1 style={{marginTop: '200px'}}>home pos: {scrollX} - {scrollY}</h1>
        </div>
    )
})

const Profile = memo(() => {
    const [scrollX, scrollY] = useScreenPos()

    return (
        <div>
            <h1 style={{marginTop: '200px'}}>profile pos: {scrollX} - {scrollY}</h1>
        </div>
    )
})

const App = memo(() => {
	return <div style={{height: '3000px'}}>
        <Home />
        <Profile />
    </div>
})

export default App
