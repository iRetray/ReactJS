import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card'
import imgTask from './img/tasksAccept.svg'
import TopHeader from './components/topheader'
import mobile from './img/mobile.svg'

class PrincipalPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [
                {
                  "title": "Tomar un desayuno ligero",
                  "description": "Desayunar temprano y sano, escencial para un gran día.",
                  "img": "https://firebasestorage.googleapis.com/v0/b/reactfileswebservices.appspot.com/o/cooking.svg?alt=media&token=53829b8f-313e-4940-8cfd-0277cc8c22b7",
                  "button": "¡Vamos por un domicilio!"
                },
                {
                  "title": "Skills Training",
                  "description": "Learn the secrets of bodyweight techniques",
                  "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercises02.png?alt=media&token=a5d55381-5f3e-4f25-92dd-560775f96aa2",
                  "button": "Ver WIX"
                },
                {
                  "title": "Strength Training",
                  "description": "Train anytime, everywere and become a superhero!",
                  "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise03.png?alt=media&token=8e5301c0-151e-415d-bd2c-655235d9c916",
                  "button": "Ver WIX"
                }
              ]
        }
    }
    render(){
        return(
            <div>
                <TopHeader 
                    name="Julian"
                    message=" ¿Listo para organizar tu día?"
                />
                {
                    this.state.data.map((tarea) => {
                        return(
                            <Card 
                            title={tarea.title}
                            description={tarea.description}
                            button={tarea.button}
                            img={tarea.img}
                            />
                        )
                    })
                }                
            </div>
        )
    }
}

export default PrincipalPage

const containerHeader = document.getElementById('app')
ReactDOM.render(<PrincipalPage />, containerHeader)

/*
const containerHeader = document.getElementById('header')
ReactDOM.render(, containerHeader)

const container1 = document.getElementById('card1')
ReactDOM.render(<Card 
                title="Aplicacion movil"
                description="Conecta con tus usuarios usando el dispositivo que siempre está a su lado."
                button="Visitar tienda de Apps"
                img={mobile}
/>, container1)

const container2 = document.getElementById('card2')
ReactDOM.render(<Card 
                title="Diseño web"
                description="Crea una pagina accesible desde cualquier dispositivo."
                button="Usar FireBaseHosting"
                img={imgTask}
/>, container2)
*/
