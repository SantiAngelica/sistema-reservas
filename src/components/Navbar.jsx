import React from 'react'
import IngresoMenu from './IngresoMenu'
import Logout from './Logout'



function Navbar() {
  return (
    <div className='navbar'>
        <IngresoMenu tittle={'Crear cliente'} ruta={'/crearcliente'} />
        <IngresoMenu tittle={'Sumar turno'} ruta={'/sumarturno'} />
        <IngresoMenu tittle={'Manejar ingresos'} ruta={'/manejaringresos'} />
        <Logout/>
    </div>
  )
}

export default Navbar