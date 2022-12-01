import { useEffect, useState } from "react"

function useScreenPos() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        function listenScrollFn() {
            setX(window.scrollX)
            setY(window.scrollY)
        }

        window.addEventListener('scroll', listenScrollFn)

        return () => {
            window.removeEventListener('scroll', listenScrollFn)
        }
    }, [])

    return [x, y]
}

export default useScreenPos