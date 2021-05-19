import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {APIForm} from '../src/components/Home'
import {LoginForm} from '../src/components/Login'


class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginForm} />
                    <Route exact path="/user" component={APIForm} />
                    {/* <Route exact path="/company" component={Company} /> */}
                </Switch>
            </Router>
        )
    }
}
export default Routes;