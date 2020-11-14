import React from 'react';
import {useContext} from 'react';
import {PropertyContext} from '../context';
import Title from '../components/Title';
import NumberFormat from 'react-number-format';

//get all unique values
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function PropertiesFilter({properties}) {
    const context = useContext(PropertyContext);
    const {handleChange, type, bedrooms, price, minPrice, maxPrice, minSize, maxSize, titledeed} = context;
    
    // get unique types
    let types = getUnique(properties, 'type');

    // add all
    types = ['all', ...types];

    // map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    // get unique bedrooms
    let bedroom = getUnique(properties, 'bedrooms');

    // mpa to jsx
    bedroom = bedroom.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    });

    return (
        <section className='filter-container'>
            <Title title="search properties" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">property type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end select type */}

                {/* guests */}
                <div className="form-group">
                    <label htmlFor="bedrooms">bedrooms</label>
                    <select name="bedrooms" id="bedrooms" value={bedrooms} className="form-control" onChange={handleChange}>
                        {bedroom}
                    </select>
                </div>
                {/* end guests */}

                {/* property price */}
                <div className='form-group'>
                    <label htmlFor='price'>
                        property price <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Ksh.'} />
                    </label>
                    <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control' />
                </div>
                {/* end of property price */}

                {/* size */}
                <div className='form-group'>
                    <label htmlFor='size'>property size (SQFT)</label>
                    <div className='size-inputs'>
                        <input type='number' name='minSize' id='size' value={minSize} onChange={handleChange} className='size-input' />
                        <input type='number' name='maxSize' id='size' value={maxSize} onChange={handleChange} className='size-input' />
                    </div>
                </div>
                {/* end of size */}

                {/* extras */}
                <div className='form-group'>
                    <div className='single-extra'>
                        <input type='checkbox' name='titledeed' id='titledeed' checked={titledeed} onChange={handleChange} />
                        <label htmlFor='titledeed'>Titledeed</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    );
}
