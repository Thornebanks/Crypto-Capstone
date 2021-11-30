import React from 'react'
import "./Currency.scss"

const Currency = ({ logo_url, name, currency, price, price_change, price_change_pct}) => {
    return (
        <div className="currency">
            <div className="currency__container">
                <div>
                    <img className="currency__img" src={logo_url} alt="crypto currency logo" />
                    <h1>{name}</h1>
                    <p>{currency}</p>
                    <p>{price}</p>
                    <p>{price_change}</p>
                    <p>{price_change_pct}</p>
                </div>
            </div>
        </div>
    )
}

export default Currency
