import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

/* Declaracion de componente funcional, sin ciclos de vida ni state
function TopHeader(props) {
    return(
        <div className="container">
        <p className="display-4">Bienvenido, <strong>{this.props.name}</strong>
        <p className="lead"> {this.props.message}</p></p>
        </div> 
    )
} */

class TopHeader extends React.Component {
    render() {
        return (
            <div className="container">
            <p className="display-4">Bienvenido, <strong>{this.props.name}</strong>
            <p className="lead"> {this.props.message}</p></p>
            </div>
        )
    }
}

export default TopHeader