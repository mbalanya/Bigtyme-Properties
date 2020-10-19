import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon:<FaCocktail/>,
                title:"Free cocktails",
                info:'Sample text. Click to select the text box. Click again or double click to start editing the text.'
            },
            {
                icon:<FaHiking/>,
                title:"Endless hiking",
                info:'Sample text. Click to select the text box. Click again or double click to start editing the text.'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info:'Sample text. Click to select the text box. Click again or double click to start editing the text.'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest beer",
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
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
