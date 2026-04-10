
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import ScrollToTop from './Components/ScrollToTop'
import UserProfile from './Pages/UserProfile'

function App() {


  return (
    <div className='min-h-screen flex justify-center items-center gap-2'>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/user' element={<UserProfile />}></Route>

      </Routes>
    </div>
  )
}

export default App
