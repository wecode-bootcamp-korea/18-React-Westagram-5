import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Loginlee from './Pages/geunhwalee/Login/Login';
import Mainlee from './Pages/geunhwalee/Main/Main';

import Loginsong from './Pages/naeunsong/Login/Login';
import Mainsong from './Pages/naeunsong/Main/Main';

import Loginkim from './Pages/sangyeonkim/Login/Login';
import Mainkim from './Pages/sangyeonkim/Main/Main';

import Loginwoo from './Pages/wooyoungkim/Login/Login';
import Mainwoo from './Pages/wooyoungkim/Main/Main';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
										<Route exact path="/login-geunhwalee" component={Loginlee} />
                    <Route exact path="/main-geunhwalee" component={Mainlee} />
										<Route exact path="/login-naeunsong" component={Loginsong} />
                    <Route exact path="/main-naeunsong" component={Mainsong} />
										<Route exact path="/login-sangyeonkim" component={Loginkim} />
                    <Route exact path="/main-sangyeonkim" component={Mainkim} />
										<Route exact path="/login-wooyoungkim" component={Loginwoo} />
                    <Route exact path="/main-wooyoungkim" component={Mainwoo} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;