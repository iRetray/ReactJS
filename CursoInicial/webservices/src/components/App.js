import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ListHome from "../pages/ListHome"
import AddCard from "../pages/AddCard"
import NotFound from "../pages/NotFound"

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" component={ ListHome }/>
                    <Route exact path="/home/add" component={ AddCard }/>
                    <Route component={ NotFound }/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App