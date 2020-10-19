import React from 'react';
import PropertiesFilter from './PropertiesFilter';
import PropertiesList from './PropertiesList';
import { withPropertyConsumer } from '../context';
import Loading from './Loading';

function PropertiesContainer({context}) {
    const {loading, sortedProperties, properties} = context;
    if (loading) {
        return <Loading />
    };
    return (
        <>
            <PropertiesFilter properties={properties} />
            <PropertiesList properties={sortedProperties} />
        </>
    );
};

export default withPropertyConsumer(PropertiesContainer);



/* import React from 'react';
import PropertiesFilter from './PropertiesFilter';
import PropertiesList from './PropertiesList';
import { PropertyConsumer } from '../context';
import Loading from './Loading';

export default function PropertiesContainer() {
    return (
        <PropertyConsumer>
            {
                (value) => {
                    const {loading, sortedProperties, properties} = value;
                    if (loading) {
                        return <Loading />
                    };
                    return (
                        <div>
                        Hello from properties Container
                        <PropertiesFilter properties={properties} />
                        <PropertiesList properties={sortedProperties} />
                    </div>
                    );
                }
            }
        </PropertyConsumer>
    );
};
 */