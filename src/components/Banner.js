import React from 'react'
import logo from '../images/logo-removebg.png';

export default function Banner({children, title, subtitle, subtitle2}) {
    return (
        <div className="banner">
            <img src={logo} alt="Bigtyme Properties" height="150px" width="150px"></img>
            <div></div>
            <h2>{subtitle}</h2>
            <p>{subtitle2}</p>
            {children}
        </div>
    )
}
