import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Default from '@layouts/Default.jsx';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Default} />
            <Route exact path="/about" component={Default} />
            <Route component={Default} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
