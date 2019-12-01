import React, { useState, useEffect } from "react";
import axios from "axios";
import BitcoinView from "./BitcoinView";

// var public_key = "ZjdmYjY2ZTI5ZThjNGNiMTkyMjdlYzBhMTVjMWQ5MmY";
// var secret_key =
//   "ZGZhMWQ2YTNiYjBmNDE0NDk1NjBhM2YyZWI5ODgyMDEyN2IyNmU5MTQxOTU0NTlhOTE4Y2NmOTBmYmFmYmYwOQ";
// var timestamp = Math.floor(Date.now() / 1000);
// var payload = timestamp + "." + public_key;
// var hash = CryptoJS.SHA256(payload, secret_key);
// var hex_hash = CryptoJS.enc.Hex.stringify(hash);

// var signature = payload + "." + hex_hash;
// console.log(signature);

// var ticker_btcusd_url = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD';

const Bitcoin = props => {
  const [Coindata, setCoindata] = useState([]);
  const [currencyValue, setCurrencyValue] = useState("BitCoin");
  const fiat = [
    "AUD",
    "BRL",
    "CAD",
    "CNY",
    "EUR",
    "GBP",
    "HKD",
    "IDR",
    "ILS",
    "INR",
    "JPY",
    "MXN",
    "NOK",
    "NZD",
    "PLN",
    "RON",
    "RUB",
    "SEK",
    "SGD",
    "USD",
    "ZAR"
  ].join(",");

  useEffect(() => {
    axios
      .get(
        `https://apiv2.bitcoinaverage.com/indices/global/ticker/short?crypto=BTC&fiat=${fiat}`,
        {
          method: "GET",
          headers: {
            // "X-ba-host": "apiv2.bitcoinaverage.com",
            // "X-ba-key": "ZjdmYjY2ZTI5ZThjNGNiMTkyMjdlYzBhMTVjMWQ5MmY",
            // "X-signature": signature
          }
        }
      )
      .then(res => {
        setCoindata(res.data);
      });
  }, []);

  const currencyChanged = e => {
    setCurrencyValue(e.target.value.toFixed(3));
  };
  return (
    <BitcoinView
      currencyChange={currencyChanged}
      coindata={Coindata}
      currencyValue={currencyValue}
    />
    // <div>
    //   <p>{currencyValue}</p>
    //   <select onChange={curencyChanged}>
    //     <option value="">Select Currency</option>
    //     {Object.keys(Coindata).map(key => {
    //       return (
    //         <option key={key} value={Coindata[key].last}>
    //           {key.slice(3, 6)}
    //         </option>
    //       );
    //     })}
    //   </select>
    // </div>
  );
};

export default Bitcoin;
