import React from 'react'
import { Link } from 'react-router-dom'

export default function IngresoMenu({ tittle, ruta }) {
    return (
        <div>
                <Link to={ruta} className='link'>{tittle}</Link>
        </div>
    )
}
