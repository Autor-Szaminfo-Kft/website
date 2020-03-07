import React from 'react';

const projects = () => {
    const projects = [
        {
            title: 'Proburo',
            image: 'proburo-ss.png'
        },
        {
            title: 'Város Teampannon',
            image: 'teampannon-s.png'
        },
        {
            title: 'Területi kataszter',
            image: 'map-komarom-s.png'
        },
        {
            title: 'Calculeat',
            image: 'calculeat-s.png'
        }
    ];

    return(
        <div className='row'>
            {
                projects.map((project, index) => {
                    return (
                        <div className='col-12 col-md-3 mb-2 mb-md-0' key={ index }>
                            <div className='frame p-0'>
                                <img src={'../../../img/projects/' + project.image} className='img-fluid image' alt={ project.title }  key={ index } />
                                <div className="overlay">
                                    <div className="text">{ project.title }</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default projects;