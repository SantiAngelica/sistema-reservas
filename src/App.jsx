import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IngresoMenu from './components/IngresoMenu'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import CrearCliente from './components/CrearCliente'
import ManejarIngresos from './components/ManejarIngresos'
import SumarTurn from './components/SumarTurn'
import Login from './components/Login'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login/> }/>
        <Route path='/crearcliente' element={<CrearCliente />}/>
        <Route path='/manejaringresos' element={<ManejarIngresos />} />
        <Route path='/sumarturno' element={<SumarTurn />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
