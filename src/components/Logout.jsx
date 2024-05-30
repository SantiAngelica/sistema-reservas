import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate()
    const alerta = () => {
        Swal.fire({
            title: "Desea cerrar sesion?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cerrar"
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/')
            }
          });
    }
  return (
    <button onClick={alerta} className='logout'>
        Log out
    </button>
  )
}

export default Logout