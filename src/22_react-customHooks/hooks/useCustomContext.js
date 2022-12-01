import { useContext } from "react"
import { MsgContext, ThemeContext } from "../context"

function useCustomContext() {
    const theme = useContext(ThemeContext)
    const msg = useContext(MsgContext)

    return [theme, msg]
}

export default useCustomContext