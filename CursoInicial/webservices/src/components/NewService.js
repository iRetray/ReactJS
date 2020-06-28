import React from 'react'
import { Link } from 'react-router-dom'

class NewService extends React.Component {
    render() {
        return(
            <Link to="/home/add">
                Añadir un servicio
            </Link>
        )
    }
}

export default NewService