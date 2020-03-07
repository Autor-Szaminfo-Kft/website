import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);

const Testimonials = () => {

    const testimonials = [
        {
            key: 1,
            message: 'Összességében szerintem egy remek minőségű szolgáltatásról van szó, amihez jó áron\n' +
                    'juthatsz hozzá. Jelentős pozitívum, hogy akár a technikailag kevésbé hozzáértők is kényelmesen használhatják ezt a VPN-t',
            signature: 'Csejtei Dávid - autorkft.hu'
        },
        {
            key: 2,
            message: 'Fantasztikusan fel tudták használni a pénzem, csak ajánlani tudom őket, adjatok nekik minél több borravalót!',
            signature: 'Szűcs Máté - proburo.hu'
        },
        {
            key: 3,
            message: 'A legjobb fejlesztő csapat akikkel valaha együtt dolgozni. Profik, segítőkészek és ráadásul kedvesek is. Minden a megbeszélt ütemben haladt, a határidő előtt kézhez kaptam a weboldalm.',
            signature: 'Bill Gates - microsoft.com'
        },
        {
            key: 4,
            message: 'Sosem dolgoztam még ennyire jó csapattal, köszönöm srácok! Ha a jövőben webes projektre lesz szükségem, biztosan őket fogom újra felhívni.',
            signature: 'Larry Page - google.com'
        }
    ];

    return(
        <div className='row'>
            {
                testimonials.map(testimonial => {
                    return (
                        <div className='col-12 col-md-6 mb-2' key={ testimonial.key }>
                            <div className='testimonial p-2'>
                                <div className='speech-bubble pl-3 pr-3 pt-3 pb-1 mb-4'>
                                    <p className='font-italic'>{ testimonial.message }</p>
                                </div>
                                <div className='row signature'>
                                    <div className='col-auto'><span className="dot"></span></div>
                                    <div className='col'>{ testimonial.signature }</div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
};

export default Testimonials;