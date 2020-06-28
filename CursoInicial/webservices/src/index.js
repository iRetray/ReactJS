import React from 'react';
import ReactDOM from 'react-dom';
import ListHome from './pages/ListHome'
import App from './components/App'

const containerHeader = document.getElementById('app')
ReactDOM.render(<App />, containerHeader)

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
