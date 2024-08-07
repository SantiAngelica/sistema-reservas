import React from 'react'
import Navbar from './Navbar'
import { useForm } from 'react-hook-form'
import classes from "./styles/CrearCli.module.css"


function CrearCliente() {
  const { register,  formState: { errors },  handleSubmit } = useForm()
  
  const onSubmit = (data) => {  

    console.log(data)
    
  }

  return (
    <div>
      <Navbar />  
      <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.card2}>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <p className={classes.heading}>Crear cliente</p>
            <div className={classes.field}>
              <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className={classes.inputicon}>
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
              </svg>
              <input className={classes.inputfield} placeholder="Nombre" type="text" {...register('nombre', {
                required: true
              })}/>
              {errors.nombre?.type === 'required' && <p>Campo requerido</p>}
            </div>
            
            <div className={classes.field}>
              <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className={classes.inputicon}>
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
              </svg>
              <input className={classes.inputfield} placeholder="Apellido" type="apellido" /*COMPLETAR LA FUNCION*/ />
            </div>

            <div className={classes.field}>
              <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className={classes.inputicon}>
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
              </svg>
              <input class={classes.inputfield} placeholder="Email" type="email" {...register('mail', {
                required: true,
                pattern: /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
              })} />
              {errors.mail?.type === 'required' && <p>Campo requerido</p>}
              {errors.mail?.type === 'pattern' && <p>Formato de mail incorrecto</p>}
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

export default CrearCliente