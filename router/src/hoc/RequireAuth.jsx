import { useLocation, Navigate } from "react-router";
import useAuth from "../hook/useAuth";

function RequireAuth({children}) {

    const location = useLocation()
    const {user} = useAuth()

    if (!user) {
        return <Navigate to='/login' state={{from: location}}/>
    }

    return children
}

export default RequireAuth