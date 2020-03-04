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
                        <h1>Weboldalakat fejlesztünk. Szükséged van egyre?</h1>
                        <button type="button" className='btn btn-primary'
                                data-container="body" data-toggle="popover"
                                data-placement="bottom"
                                data-trigger="focus"
                                data-content="+36-30-777-3025">Hívj minket!</button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col mb-1 pt-4 pb-4 section'>
                    <h1>Miért dolgozz velünk</h1>
                    <ul>
                        <li>Szeretünk személyes beszélgetéssel kezdeni minden projektünket, hogy pontosan megismerhessük az igényeidet és te is megismerhess minket</li>
                        <li>A fejlesztés első napjától élesben követheted weboldalad készültségi fokát egy speciális rendszeren keresztül</li>
                        <li>Folyamatos a kommunikáció a közös munka során és biztosra veheted, hogy nem szívódunk fel a projekt felénél</li>
                        <li>Tőlünk bármikor bármit kérdezhetsz, nem számít mennyire vagy képben technikailag</li>
                        <li>Üzemeltetésben is segítünk ha szeretnéd, nem engedjük el a kezed amikor elkészült amit kértél tőlünk</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col mb-1 pt-4 pb-4 section'>
                    <h1>Rólunk mondták</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col mb-1 pt-4 pb-4 section'>
                    <h1>Csapatunk</h1>
                    <div className='row justify-content-center'>
                        <Members />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, {})(HomePage);