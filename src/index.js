import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import store, {history} from './store';

import Application from './app';
import '../style/basic.scss';
import '../style/projects-grid.scss';

require('bootstrap/dist/js/bootstrap');
import $ from 'jquery';

$(function () {
    $('[data-toggle="popover"]').popover()
});

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