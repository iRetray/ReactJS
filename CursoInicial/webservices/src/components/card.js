import React from 'react'
import './styles/card.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import img1 from '../img/tasksAccept.svg'

class Card extends React.Component {
    render(){
        return (
            <div className="containerCard">
                <div className="carder row center">
                    <div className="col-6 imageCard">
                        <img src={this.props.img} className="img-fluid imageCard"/>
                    </div>
                    <div className="col-6 textCard center">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.description}</p>
                        <button type="button" className={this.props.typeButton}>{this.props.button}</button>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default Card