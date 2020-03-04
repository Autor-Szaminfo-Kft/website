import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './home/components/page';

const Application = () => {
    return(
        <Switch>
            <Route path='/' component={HomePage} />
        </Switch>
    );
};

export default Application;