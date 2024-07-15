import React from 'react'
import { Link } from 'react-router-dom'
import classes from './styles/Ingresomenu.module.css'

export default function IngresoMenu({ tittle, ruta }) {
    return (
        <div>
                <Link to={ruta} className={classes.linkDelNav}>{tittle}</Link>
        </div>
    )
}
