import { useState, useEffect } from "react"
import { Link, useLocation, useSearchParams } from "react-router"
import BlogFilter from "../components/BlogFIlter"

function Blogpage() {

  const [posts, setPosts] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const postQuery = searchParams.get('post') || ''
  const latest = searchParams.has('latest')

  const startsFrom = latest ? 80 : 1



  console.log(useLocation())

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

    return (
      <>
        <h1>Blog</h1>
        <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams}></BlogFilter>
        <Link to="/posts/new">Add New Post</Link>
        {
          posts.filter(
            post => post.title.includes(postQuery) && post.id >= startsFrom
          ).map(post => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          ))
        }
      </>
    )
  }
  
  export default Blogpage
  