import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {PropertyContext} from '../context';
import StyledHero from '../components/StyledHero';
import NumberFormat from 'react-number-format';

export default class SingleProperty extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props);
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }

    static contextType = PropertyContext;
    // componentDidMount() {}
    render() {
        const {getProperty} = this.context;
        const property = getProperty(this.state.slug);
        if(!property) {
            return <div className="error">
                <h3>no such property could be found...</h3>
                <Link to='/properties' className="btn-primary">
                    back to properties
                </Link>
            </div>
        }
        const {name, description, bedrooms, size, price, extras, breakfast, titledeed, images} = property;
        const [mainImg, ...defaultImg] = images;
        console.log(defaultImg);
        return (
        <>
            <StyledHero img = {mainImg || this.state.defaultBcg}>
                <Banner title = {`${name} property`}>
                    <Link to = '/properties' className='btn-primary'>
                        back to properties
                    </Link>
                </Banner>
            </StyledHero>
            <section className='single-property'>
                <div className='single-property-images'>
                    {defaultImg.map((item, index) => {
                        return <img key={index} src={item} alt={name}/>
                    })}
                </div>
                <div className='single-property-info'>
                    <div className="single-property-contact">
                        <h5><a href = 'tel:+254721162028' target="_blank">Contact: +254 721 162 028</a></h5>
                    </div>
                    <article className='desc'>
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className='info'>
                        <h3>info</h3>
                    <h6>Price : <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Ksh.'} /></h6>
                    <h6>size : {size} SQFT</h6>
                    <h6>
                        Bedrooms : {" "}
                        {bedrooms > 1 ? `${bedrooms} bedrooms` : `${bedrooms} bedroom`}
                    </h6>
                    <h6>
                        {titledeed ? "Title deed available" : "Title deed not available"}
                    </h6>
                    </article>
                </div>
            </section>
            <section className="property-extras">
                <h6>Features</h6>
                <ul className="extras">
                    {extras.map((item, index) => {
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            
        </>
        );
    }
}
