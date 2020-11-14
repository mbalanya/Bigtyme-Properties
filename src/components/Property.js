import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

export default function Property({property}) {
    const{name, slug, images, price} = property;

    return (
        <article className="property">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single property"></img>
                <div className="price-top">
                    <h6><NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Ksh.'} /></h6>
                    <p>available</p>
                </div>
                <Link to={`/properties/${slug}`} className="btn-primary property-link">Open Property</Link>
            </div>
        <p className="property-info">{name}</p>
        </article>
    );
}

Property.propTypes = {
    property: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
};