import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card'
import imgTask from './img/tasksAccept.svg'
import TopHeader from './components/topheader'

const containerHeader = document.getElementById('header')
ReactDOM.render(<TopHeader 
                name="Julian"
                message=" Esta es tu página de inicio"
/>, containerHeader)

const container1 = document.getElementById('card1')
ReactDOM.render(<Card 
                title="Aplicacion movil"
                description="Conecta con tus usuarios usando el dispositivo que siempre está a su lado."
                button="Visitar tienda de Apps"
                img={'./img/tasksAccept.svg'}
/>, container1)

const container2 = document.getElementById('card2')
ReactDOM.render(<Card 
                title="Diseño web"
                description="Crea una pagina accesible desde cualquier dispositivo."
                button="Usar FireBaseHosting"
                image='imgTask'
/>, container2)
