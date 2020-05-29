import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './Login';
import Geral from './Geral';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <PrivateRoute exact path='/geral' component={Geral} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;