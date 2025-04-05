import { useParams } from "react-router"

function Editpost() {
    const {id} = useParams()

    return (
        <>
        <h1>Edit Post</h1>
        </>
    )
}

export default Editpost