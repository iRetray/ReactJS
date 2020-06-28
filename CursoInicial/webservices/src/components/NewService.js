import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "react-fontawesome";

class NewService extends React.Component {
    render() {
        return(
            <Link to="home/add">
                <center>
                    <button className="btn btn-primary" href="home/add">
                         Añadir un servicio
                    </button>
                </center>
            </Link>            
        )
    }
}

export default NewService