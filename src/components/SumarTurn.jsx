import React from 'react'
import Navbar from './Navbar'
import classes from './styles/Sumarturn.module.css'

function SumarTurn() {
  return (
    <div>
      <Navbar/>
       <div className={classes.container}>
        <div className={classes.card}>
          <div className={classes.card2}>
            <form className={classes.form}>
            <p className={classes.heading}>Sumar turno</p>
              <div className={classes.field}>
                <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className={classes.inputicon}>
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                  <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                </svg>
                <input className={classes.inputfield} placeholder="Identificador" type="text" />
              </div>
            
              <div className={classes.btn}>
                <button className={classes.button2}>Continuar</button>
              </div>
            
            </form>
    
            </div>
            </div>
          </div>        
        
      </div>
  )
}

export default SumarTurn