import React from 'react'
import { Link } from 'react-router-dom'
import './styles/ingresomenu.module.css'

export default function IngresoMenu({ tittle, ruta }) {
    return (
        <div>
                <Link to={ruta} className='linkDelNav'>{tittle}</Link>
        </div>
    )
}
