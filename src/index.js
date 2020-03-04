import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import store, {history} from './store';

import Application from './app';
import '../style/basic.scss';
import '../style/hexagon.scss';

require('bootstrap/dist/js/bootstrap');

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Application />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
);