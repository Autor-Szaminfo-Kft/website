import React from 'react';

const Members = () => {
    const members = [
        {
            name: 'Újfalusi Melinda',
            img: 'meli.png'
        },
        {
            name: 'Mecseki Péter',
            img: 'empty.png'
        },
        {
            name: 'Özkan Ferhat',
            img: 'empty.png'
        },
        {
            name: 'Csejtei Dávid',
            img: 'me.png'
        }
    ];

    function getMemberItems() {
        return members.map(member => {
            return (
                <div className='col-auto p-4' key={member.name}>
                    <div className='profile-img pl-2 pr-2'>
                        <img src={'../../../img/'+member.img} className='rounded-circle img-fluid mb-3' />
                        <h2>{member.name}</h2>
                    </div>
                </div>
            );
        });
    }

    return getMemberItems();
};

export default Members;