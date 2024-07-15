import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from "./styles/Login.module.css"



function Login({ setValido }) {
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)
    const [errorCred, setErrorCred] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (nombre == "" || contraseña == "") {
            setError(true)
            setErrorCred(false)
            return
        }
        else if (nombre != 'santi' || contraseña != '123') {
            setErrorCred(true)
            setError(false)
            return
        }
        setError(false)
        setErrorCred(false)
        if (nombre == 'santi' && contraseña == '123') {
            navigate('/crearcliente')
        }
        
    }

    return (
        <section className={classes.main}>
            <div className={classes.loginbox}>
                <form onSubmit={handleSubmit}>
                    <div className={classes.userbox}>
                        <input type="text"
                            name=""
                            required=""
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                        <label>Usuario</label>
                    </div>
                    <div className={classes.userbox}>
                        <input type="password"
                            name=""
                            required=""
                            value={contraseña}
                            onChange={e => setContraseña(e.target.value)}
                        />
                        <label>Contraseña</label>
                    </div>
                    {error && <p>Todos los campos son obligatorios</p>}
                    {errorCred && <p>Credenciales incorrectas</p>}
                    <center>
                        <button>
                            Log in
                            <span></span>
                        </button>
                    </center>
                </form>
            </div>
        </section>
    )
}

export default Login