import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SingleCrypto';
import Chart from '../../components/Chart/Chart';


const key = process.env.REACT_APP_API_KEY;

function SingleCrypto(props) {
   const [coin , setCoin] = useState();

   useEffect(() => {
       console.log("props", props)
    axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=${key}&ids=${props.match.params.id}&interval=1d,7d,30d,365d&per-page=100&page=1`
      )
      .then((response) => {
        console.log("testing",response.data);
        setCoin(response.data[0])
      })
      .catch((error) => console.log(error));
  }, []);


    if (!coin){
        return <h2>
            Loading
        </h2>
    }
    return (
        <div>
            <div>
                <img src={coin.logo_url} alt="coin logo" width="50px" />
                <h2>{coin.name}</h2>
                <h6>{coin.currency}</h6>
                <h6>{coin.price}</h6>
                <h6>$ {coin["1d"].price_change}</h6>
                <h6>{coin["1d"].price_change_pct}%</h6>

                <Chart coin={coin}/>
                
                
                

                <h2>About {coin.name}</h2>
                <h6>Market cap</h6>
                <h6>$ {coin.market_cap}  USD</h6>
                <h6>Volume (24 hrs)</h6>
                <h6>$ {coin["1d"].volume}  USD</h6>
                <h6>Circulation supply</h6>
                <h6>{coin.circulating_supply} {coin.currency}</h6>
                <h6>All-time high</h6>
                <h6>$ {coin.high} USD</h6>
            </div>


        </div>
    )
}

export default SingleCrypto;
