import React from 'react';
import { connect } from 'react-redux';

import Menu from './menu';
import Members from './members';

const HomePage = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col header'>
                    <Menu />
                </div>
            </div>
            <div className='row'>
                <div className='col mb-1 pt-4 pb-4'>
                    <div id='title'>
                        <h1>Szoftvereket fejlesztünk. Szükséged van egyre?</h1>
                        <button type="button" className='btn btn-primary'
                                data-container="body" data-toggle="popover"
                                data-placement="bottom"
                                data-trigger="focus"
                                data-content="+36-30-777-3025">Hívj minket!</button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col mb-1 pt-4 pb-4'>
                    <div className='row justify-content-center'>
                        <Members />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, {})(HomePage);