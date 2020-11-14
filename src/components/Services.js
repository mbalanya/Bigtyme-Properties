import React, { Component } from 'react';
import {FaLandmark, FaCheck, FaPen, FaWater, FaCamera, FaLock} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon:<FaLandmark/>,
                title:"Land Survey",
                info:'Sample text. Click to select the text box. Click again or double click to start editing the text.'
            },
            {
                icon:<FaCheck/>,
                title:"Land Valuation",
                info:'Sample text. Click to select the text box. Click again or double click to start editing the text.'
            },
            {
                icon:<FaPen/>,
                title:"Architectural Designs",
                info:'Sample text. Click to select the text box. Click again or double click to start editing the text.'
            },
            {
                icon:<FaWater/>,
                title:"Plumbing",
                info:'Sample text. Click to select the text box. Click again or double click to start editing the text.'
            },
            {
                icon:<FaCamera/>,
                title:"CCTV Installation",
                info:'Sample text. Click to select the text box. Click again or double click to start editing the text.'
            },
            {
                icon:<FaLock/>,
                title:"Electric Fencing",
                info:'Sample text. Click to select the text box. Click again or double click to start editing the text.'
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title='Services'></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
