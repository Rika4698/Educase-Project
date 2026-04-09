
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home'
import Login from './Pages/Login'

function App() {


  return (
        <div className='min-h-screen flex justify-center items-center gap-2'>
     
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/login' element={<Login/>}></Route>

      </Routes>
    </div>
  )
}

export default App
