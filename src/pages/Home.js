import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import FeaturedProperty from '../components/FeaturedProperty';

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="Bigtyme Properties" subtitle="This is 'your property partner' where we help our clients solve the land equation">
                    <Link to='/properties' className="btn-primary">
                        View Properties
                    </Link>
                </Banner>
            </Hero>
            <FeaturedProperty />
        </>
    )
}
