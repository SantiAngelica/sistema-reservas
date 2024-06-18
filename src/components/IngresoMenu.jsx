import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function IngresoMenu({ tittle, ruta }) {
    return (
        <div>
                <Link to={ruta} className='linkNavBar'>{tittle}</Link>
        </div>
    )
}
