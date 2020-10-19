import React, { Component } from 'react';
// import items from './data';
import Client from './Contentful';

const PropertyContext = React.createContext();

class PropertyProvider extends Component {
    state = {
        properties: [],
        sortedProperties: [],
        featuredProperties: [],
        loading: true,
        type:'all',
        bedrooms:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        titledeed: false
    };

    // getData
    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "bigtymeProperties",
                order: "-sys.createdAt"
            });
            let properties = this.formatData(response.items);
            let featuredProperties = properties.filter(property => property.featured === true);
            let maxPrice = Math.max(...properties.map(item => item.price));
            let maxSize = Math.max(...properties.map(item => item.size));

            this.setState({
                properties,
                featuredProperties,
                sortedProperties: properties,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize
            })
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getData()

        // local data
        /* let properties = this.formatData(items);
        let featuredProperties = properties.filter(property => property.featured === true);
        let maxPrice = Math.max(...properties.map(item => item.price));
        let maxSize = Math.max(...properties.map(item => item.size));

        this.setState({
            properties,
            featuredProperties,
            sortedProperties: properties,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        }) */
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);

            let property = { ...item.fields, images, id };
            return property;
        });
        return tempItems;
    }

    getProperty = (slug) => {
        let tempProperties = [...this.state.properties];
        const property = tempProperties.find(property => property.slug === slug);
        return property;
    };

    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = event.target.name;
        this.setState(
            {
                [name] : value
            },
            this.filterProperties
        );
    }

    filterProperties = () => {
        let {
            properties, type, bedrooms, price, minSize, maxSize, titledeed
        } = this.state

        // all the properties
        let tempProperties = [...properties];

        //transform values
        bedrooms = parseInt(bedrooms);
        price = parseInt(price);

        // filter by type
        if(type !== 'all') {
            tempProperties = tempProperties.filter(property => property.type === type);
        }

        // filter by bedroom
        if(bedrooms !== 1) {
            tempProperties = tempProperties.filter(property => property.bedrooms >= bedrooms);
        }

        // filter by price
        tempProperties = tempProperties.filter(property => property.price <= price);

        // filter by size
        tempProperties = tempProperties.filter(property => property.size >= minSize && property.size <= maxSize);

        // filter by titledeed
        if(titledeed) {
            tempProperties = tempProperties.filter(property => property.titledeed === true);
        }

        // change state
        this.setState({
            sortedProperties : tempProperties
        })
    };

    render() {
        return (
            <PropertyContext.Provider value={{ ...this.state, getProperty: this.getProperty, handleChange: this.handleChange }}>
                {this.props.children}
            </PropertyContext.Provider>
        );
    }
}

const PropertyConsumer = PropertyContext.Consumer;

export function withPropertyConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <PropertyConsumer>
                {value => <Component {...props} context={value} />}
            </PropertyConsumer>
        );
    };
}

export { PropertyProvider, PropertyConsumer, PropertyContext };