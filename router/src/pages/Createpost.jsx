import useAuth from "../hook/useAuth"
import { replace, useNavigate } from "react-router"

function Createpost() {
    const {signout} = useAuth()
    const navigate = useNavigate()

    return (
        <>
        <h1>Create Post</h1>
        <button onClick={() => signout(() => navigate('/', {replace: true}) )}>Log Out</button>
        </>
    )
}

export default Createpost