import { useParams, Link, useNavigate } from "react-router"
import { useState, useEffect } from "react"

function Singlepage() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState(null)

    const goBack = () => navigate(-1)
    const goHome = () => navigate('/', {replace: true})
 

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])

    return (
      <>
        <button onClick={goBack}>Go back</button>

        <button onClick={goHome}>Go Home</button> {/* BAD APPROACH */}
        {post && (
            <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <Link to={`/posts/${id}/edit`}>Edit this post</Link>
            </>
        )}
      </>
    )
  }
  
  export default Singlepage
  