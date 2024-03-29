
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login.jsx'
import Regsiter from './components/Regsiter.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'

function App() {
  

  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/regsiter' element={<Regsiter/>}/>
   </Routes>
   <Footer/>
   </>
  )
}

export default App
