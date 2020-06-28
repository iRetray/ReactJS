import React from 'react'
import "../components/styles/notFound.css"
import img404 from "../img/404.jpg"

class NotFound extends React.Component {
    render() {
        return(
            <div className="container404">
                <center><p className="display-3">Página web no encontrada</p>
                    <p className="display-4 text-muted">Error 404</p>
                </center>
                <img src={ img404 } className="img404"/>
            </div>
        )
    }
}

export default NotFound