import React from 'react';
import { connect } from 'react-redux';

import Menu from './menu';

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
                        <button className='btn btn-primary'>Hívj minket</button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col bg-info content'>
                </div>
            </div>
        </div>
    );
};

export default connect(null, {})(HomePage);