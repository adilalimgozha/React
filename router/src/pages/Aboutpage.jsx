import { Route, Routes, Link, Outlet } from "react-router"

function Aboutpage() {
  

    return (
      <>
        <h1>About</h1>

        <ul>
          <li><Link to='/about/contacts'>Our Contacts</Link></li>
          <li><Link to='/about/team'>Our Team</Link></li>
        </ul>
        {/* <Routes>
          <Route path='contacts' element={<p>Our contacts</p>}/>
          <Route path='team' element={<p>Our team</p>}/>
        </Routes> */}
        <Outlet/>
      </>
    )
  }
  
  export default Aboutpage
  