import {Routes, Route, Link, Navigate} from 'react-router'

import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Blogpage from './pages/Blogpage'
import Createpost from './pages/Createpost'
import Singlepage from './pages/Singlepage'
import Notfoundpage from './pages/Notfoundpage'
import Editpost from './pages/Editpost'

import Layout from './components/Layout'
import Loginpage from './pages/Loginpage'

import RequireAuth from './hoc/RequireAuth'
import AuthProvider from './hoc/AuthProvider'

function App() {

  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="about/" element={<Aboutpage />}>
            <Route path='contacts' element={<p>Our contacts</p>}/>
            <Route path='team' element={<p>Our team</p>}/>
          </Route>
          <Route path="about-us" element={<Navigate to='/about' replace/>}></Route>
          <Route path="posts" element={<Blogpage />}></Route>
          <Route path="posts/:id" element={<Singlepage />}></Route>
          <Route path="posts/:id/edit" element={<Editpost />}></Route>
          <Route path="posts/new" element={<RequireAuth><Createpost /></RequireAuth>}></Route>
          <Route path="login" element={<Loginpage />}></Route>
          <Route path="*" element={<Notfoundpage />}></Route>
        </Route>
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App
