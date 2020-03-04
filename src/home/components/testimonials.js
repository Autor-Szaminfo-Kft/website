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
            rating: 5
        },
        {
            key: 2,
            message: 'Fantasztikusan fel tudták használni a pénzem, csak ajánlani tudom őket, adjatok nekik minél több borravalót!',
            rating: 5
        },
        {
            key: 3,
            message: 'A legjobb fejlesztő csapat akikkel valaha együtt dolgozni. Profik, segítőkészek és ráadásul kedvesek is. Minden a megbeszélt ütemben haladt, a határidő előtt kézhez kaptam a weboldalm.',
            rating: 5
        },
        {
            key: 4,
            message: 'Sosem dolgoztam még ennyire jó csapattal, köszönöm srácok! Ha a jövőben webes projektre lesz szükségem, biztosan őket fogom újra felhívni.',
            rating: 5
        }
    ];

    return(
        testimonials.map(testimonial => {
            return (
                <div className='testimonial' key={ testimonial.key }>
                    <FontAwesomeIcon icon="star"/>
                    <FontAwesomeIcon icon="star"/>
                    <FontAwesomeIcon icon="star"/>
                    <FontAwesomeIcon icon="star"/>
                    <FontAwesomeIcon icon="star"/>
                    <p className='font-italic'>{ testimonial.message }</p>
                </div>
            );
        })
    )
};

export default Testimonials;