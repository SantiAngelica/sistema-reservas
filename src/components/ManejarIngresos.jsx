import React from 'react'
import Navbar from './Navbar'
import classes from './styles/Manejaringres.module.css'



function ManejarIngresos() {
  return (
    <div>
      <Navbar/>
      <div class={classes.card}>
      <p><span>HOVER ME</span></p>
      <p><span>HOVER ME</span></p>
      <p><span>HOVER ME</span></p>
</div>
    </div>
  )
}

export default ManejarIngresos