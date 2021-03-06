import React from 'react'
import Card from '../components/card'
import TopHeader from '../components/topheader'
import NewService from "../components/NewService"

class ListHome extends React.Component {
    state = {
            data: [
                {
                  "id": 1,
                  "title": "Tomar un desayuno ligero",
                  "description": "Desayunar temprano y sano, escencial para un gran día.",
                  "img": "https://firebasestorage.googleapis.com/v0/b/reactfileswebservices.appspot.com/o/breakfast.svg?alt=media&token=0f0cbe9f-9115-42cf-98dd-5c58c2f507d4",
                  "button": "¡Vamos por un domicilio!",
                  "typeButton": "btn btn btn-primary btn-sm",                  
                  
                },
                {
                  "id": 2,
                  "title": "Realizar una rutina de ejercicios",
                  "description": "Para estar lleno de energia todo el dia, y poder tener una figura envidiable.",
                  "img": "https://firebasestorage.googleapis.com/v0/b/reactfileswebservices.appspot.com/o/exercise.svg?alt=media&token=4ff94e42-cf51-4c6b-a67f-e7ca3494e9a9",
                  "button": "Ver rutinas de ejercicios",
                  "typeButton": "btn btn btn-warning btn-sm"
                },
                {
                  "id": 3,
                  "title": "Planear tu día",
                  "description": "Asegúrate de ser productivo utilizando una lista concisa de tareas por hacer. ¿Porqué no empiezas añadiendo una tarea?",
                  "img": "https://firebasestorage.googleapis.com/v0/b/reactfileswebservices.appspot.com/o/post.svg?alt=media&token=39387ca2-fa36-40db-b246-5a9d9fe4ace7",
                  "button": "Recomendaciones de tareas",
                  "typeButton": "btn btn btn-success btn-sm"
                }
              ]
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
                            typeButton={tarea.typeButton}
                            action={tarea.action}
                            img={tarea.img}
                            />
                        )
                    })
                }
                <NewService />             
            </div>
        )
    }
}

export default ListHome