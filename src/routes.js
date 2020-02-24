import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as page from './pages'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={page.IndexPage}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;

