import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import PropertiesContainer from '../components/PropertiesContainer';

const Properties = () => {
    return (
        <>
            <Hero hero="propertiesHero">
                <Banner title='Properties For Sale'>

                </Banner>
            </Hero>
            <PropertiesContainer />
        </>
    );
};

export default Properties;