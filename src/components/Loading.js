import React from 'react'
import loadingGif from '../images/gif/loading-gear.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h4>properties data loading...</h4>
            <img src={loadingGif} alt="loading..." />
        </div>
    )
}
