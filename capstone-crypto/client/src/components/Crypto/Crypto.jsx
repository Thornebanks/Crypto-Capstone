import axios from "axios";
import { useEffect, useState} from "react";
import "./Crypto.scss";

const key = process.env.REACT_APP_API_KEY

function CryptoCurrency() {
    const [currency, setCurrency] = useState()
    console.log(key);
    useEffect(() => {
        axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${key}&interval=1d,30d&convert=EUR&per-page=100&page=1`)
        .then(response => {
            setCurrency(response.data);
            console.log(response.data);
        }).catch((error) => console.log(error));
    }, []);
    return (
        <div className="currency">
            <div className="currency__container">
                <h1 className="currency__title">Crypto Tracker</h1>
                <form className="currency__form">
                    <input className="currency__input" type="text" placeholder="Search" />
                </form>
            </div>
        </div>
    );
};

export default CryptoCurrency;