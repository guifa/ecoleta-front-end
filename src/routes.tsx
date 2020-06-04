import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import RegisterPoint from './pages/RegisterPoint';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact></Route>
            <Route component={RegisterPoint} path="/register-point"></Route>
        </BrowserRouter>
    );
};

export default Routes;