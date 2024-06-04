import React from 'react'
import Navbar from './Navbar'
import { useForm } from 'react-hook-form'

function CrearCliente() {
  const { register,  formState: { errors },  handleSubmit } = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
  }



  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="form_area">
          <h1 className="text-center">Crear cliente</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form_group">
              <label className="sub_title" for="name">Nombre</label>
              <input className="form_style" type="text" {...register('nombre', {
                required: true
              })} />
              {errors.nombre?.type === 'required' && <p>Campo requerido</p>}
            </div>
            <div className="form_group">
              <label className="sub_title" for="name">Apellido</label>
              <input className="form_style" type="text" {...register('apellido', {
                required: true
              })} />
              {errors.apellido?.type === 'required' && <p>Campo requerido</p>}
            </div>
            <div className="form_group">
              <label className="sub_title" for="email">Correo</label>
              <input className="form_style" type="email" {...register('mail', {
                required: true,
                pattern: /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
              })} />
              {errors.mail?.type === 'required' && <p>Campo requerido</p>}
              {errors.mail?.type === 'pattern' && <p>Formato de mail incorrecto</p>}
            </div>
            <div>
              <button className="btn">Crear cliente</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CrearCliente