import React from 'react';

const services = () => {
    const services = [
        {
            title: 'Személyes kapcsolat',
            description: 'Szeretünk személyes beszélgetéssel kezdeni minden projektünket, hogy pontosan megismerhessük az igényeidet és te is megismerhess minket',
            img: 'discuss.png'
        },
        {
            title: 'Átláthatóság és haladás',
            description: 'A fejlesztés első napjától élesben követheted weboldalad készültségi fokát egy speciális rendszeren keresztül',
            img: 'progress-2.png'
        },
        {
            title: 'Gyors és pontos szállítás',
            description: 'Mi folyamatosan kommunikálunk a közös munka során biztosra veheted, hogy nem szívódunk fel a projekt felénél, helyette időben leszállítjuk amit megrendeltél',
            img: 'process.png'
        },
        {
            title: 'Jó fejek vagyunk',
            description: 'Tőlünk bármikor bármit kérdezhetsz, szívesen segítünk, nem számít mennyire vagy képben technikailag',
            img: 'happy.png'
        },
        {
            title: 'Együttműködés',
            description: 'Üzemeltetésben is segítünk ha szeretnéd, nem engedjük el a kezed amikor elkészült amit kértél tőlünk',
            img: 'together.png'
        }
    ];

    return(
        <div className='row'>
        {
            services.map(service =>
                <div className='col-12 col-md pt-4 pb-4 section' key={service.title}>
                    <div className='service m-1 p-2 row align-items-center'>
                        <h3 className='text-center w-100'>{service.title}</h3>
                        <img src={'../img/'+service.img} className='img-fluid' />
                        {service.description}
                    </div>
                </div>
            )
        }
        </div>
    );
};

export default services;