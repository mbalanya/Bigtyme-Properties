import React, { Component } from 'react';
import {FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaGlobe} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Title from './Title';

export default class Contacts extends Component {
    state = {
        services: [
            {
                icon:<FaPhone/>,
                iconColor: 'rgb(232, 0, 24)',
                title:"Head Office",
                location: 'Syokimau',
                info:'+254721162028',
                linkInfo: 'tel:+254721162028'
            },
            {
                icon:<FaPhone/>,
                iconColor: 'rgb(232, 0, 24)',
                title:"Branch Office",
                location: 'Luanda',
                info:'+254719721708 / +254712614216',
                linkInfo: 'tel:+254719721708'
            },
            {
                icon:<FaEnvelope/>,
                iconColor: 'rgb(74, 0, 160)',
                title:"Email Address",
                info:'bigtymeproperties@gmail.com',
                linkInfo: 'mailto:bigtymeproperties@gmail.com'
            },
            {
                icon:<FaWhatsapp/>,
                iconColor: 'rgb(37,211,102)',
                title:"Whatsapp",
                info: 'Bigtyme Properties',
                linkInfo: 'https://wa.me/message/XJ2GTNZXFANIG1'
            },
            {
                icon:<FaFacebook/>,
                iconColor: 'rgb(66,103,178)',
                title:"Facebook",
                info: 'BigtymeProperties',
                linkInfo: 'http://fb.me/BigtymeProperties2020'
            },
            {
                icon:<FaInstagram/>,
                iconColor: 'rgb(232, 0, 24)',
                title:"Instagram",
                info: 'bigtyme.properties',
                linkInfo: 'http://www.instagram.com/bigtyme.properties'
            },
            {
                icon:<FaTwitter/>,
                title:"Twitter",
                iconColor: 'rgb(29,161,242)',
                info: '@bigtymepropert1',
                linkInfo: 'http://www.twitter.com/bigtymepropert1'
            },
            {
                icon:<FaGlobe/>,
                iconColor: 'rgb(1,1,1)',
                title:"Tiktok",
                info: '@bigtyme_properties',
                linkInfo: 'https://www.tiktok.com'
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title='Contacts'></Title>
                <h3>Click links below to Contact Us</h3>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <div className='contact-info'>
                                <a href = {item.linkInfo} target="_blank">  
                                <IconContext.Provider value={{ style: {color: item.iconColor}}}>
                                    <span>
                                        {item.icon}
                                    </span>
                                </IconContext.Provider>
                                <h4>{item.title}</h4>
                                <p>{item.location}</p>
                                <p>{item.info}</p> </a>
                            </div>  
                        </article>
                    })}
                </div>
            </section>
        )
    }
}