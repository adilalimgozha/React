import {NavLink, Outlet} from 'react-router'
import CustomLink from './CustomLink'

/*const setActive = ({isActive}) => isActive ? 'active-link' : ''*/

function Layout() {

    return (
        <>
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header>

            <Outlet></Outlet>

            <footer>2025</footer>
        </>
    )
}

export default Layout