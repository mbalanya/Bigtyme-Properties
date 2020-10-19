import React from 'react';
import Property from './Property';

export default function PropertiesList({properties}) {
    if(properties.length === 0) {
        return (
            <div className='empty-search'>
                <h3>Unfortunately no properties matched your search</h3>
            </div>
        )
    }
    return (
        <section className='propertieslist'>
            <div className='propertieslist-center'>
                {
                    properties.map(item => {
                        return <Property key={item.id} property={item} />;
                    })
                }
            </div>
        </section>
    )
}
