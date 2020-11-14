import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class AboutServices extends Component {
    state = {
        AboutServices: [
            {
                icon:<FaCocktail/>,
                title:"PROFILE",
                info: 'Bigtyme Properties',
                info1: ' was started in 2015 operating under the umbrella',
                info1a: ' Bigtyme Investments.',
                info2: 'It was officially launched in 2019 to operate as a land brokerage and agent company',
                info3: 'Our primary objective is to link land buyers and sellers in relation to aquisition and disposal.',
                info4: 'Our head office is located in Syokimau, Machakos County and a Branch office in Luanda Town, Vihiga County.',
                info5: 'We have a team of highly knowledgable, motivated and dedicated personnel who offer professional advice to clients on matters land.',
                info6: 'Our organisational structure:',
                structure1: 'Group CEO',
                structure2: 'General Manager',
                structure3: 'Lawyer',
                structure4: 'Operations',
                structure5: 'Valuer',
                structure6: 'Surveyor',
                structure7: 'Architect',
                info7: 'Slogan: ',
                info7a: '"Your Property Partner"',
                info8: 'Mission: ',
                info8a: 'Assisting clients access and cease property opportunities',
                info9: 'Vision: ',
                info9a: 'To be a regional leader in property business'
            }
        ]
    };
    render() {
        return (
            <section className="services aboutUs">
                <Title title='About Our Services'></Title>
                <div className="services-center">
                    {this.state.AboutServices.map((item, index) => {
                        return <article key={index} className="service">
                            <p><strong>{item.info}</strong> {item.info1} <strong>{item.info1a}</strong></p>
                            <p>{item.info2}</p>
                            <p>{item.info3}</p>
                            <p>{item.info4}</p>
                            <p>{item.info5}</p>
                            <p>{item.info6}</p>
                            <ul>
                                <li>{item.structure1}</li>
                                <li>{item.structure2}</li>
                                <li>{item.structure3}</li>
                                <li>{item.structure4}</li>
                                <li>{item.structure5}</li>
                                <li>{item.structure6}</li>
                                <li>{item.structure7}</li>
                            </ul><br />
                            <p><strong>{item.info7}</strong>{item.info7a}</p>
                            <p><strong>{item.info8}</strong>{item.info8a}</p>
                            <p><strong>{item.info9}</strong>{item.info9a}</p> <br />
                            
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
