import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {APIForm} from '../src/components/Home'
import {LoginForm} from '../src/components/Login'

const Routes: React.FC = (): JSX.Element => {

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

export default Routes;