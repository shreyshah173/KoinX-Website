// import React, { useState, useEffect } from 'react';

// const CoinData = () => {
//   const [cryptoList, setCryptoList] = useState([]);
//   const [firstCrypto, setFirstCrypto] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
//         const data = await response.json();
//         // Extracting required fields from the response
//         const formattedData = data.map(crypto => ({
//           id: crypto.id,
//           name: crypto.name,
//           image: crypto.image,
//           currentPrice: crypto.current_price,
//           symbol: crypto.symbol,
//           priceChangePercentage24h: crypto.price_change_percentage_24h,
//         }));
//         setCryptoList(formattedData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (cryptoList.length > 0) {
//       setFirstCrypto(cryptoList[0]);
//     }
//   }, [cryptoList]);

//   return (
//     <div>
//       <h1>Cryptocurrency Data</h1>
//       {firstCrypto && (
//         <div>
//           <h2>Details of the First Cryptocurrency</h2>
//           <img src={firstCrypto.image} alt={firstCrypto.name} style={{ width: '50px', height: '50px' }} />
//           <div>{firstCrypto.name} ({firstCrypto.symbol})</div>
//           <div>Current Price: ${firstCrypto.currentPrice}</div>
//           <div>Price Change (24h): {firstCrypto.priceChangePercentage24h}%</div>
//         </div>
//       )}
//       <ul>
//         {cryptoList.map(crypto => (
//           <li key={crypto.id}>
//             <img src={crypto.image} alt={crypto.name} style={{ width: '50px', height: '50px' }} />
//             <div>{crypto.name} ({crypto.symbol})</div>
//             <div>Current Price: ${crypto.currentPrice}</div>
//             <div>Price Change (24h): {crypto.priceChangePercentage24h}%</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CoinData;
import React from 'react'

const CoinData = () => {
  return (
    <div>CoinData</div>
  )
}

export default CoinData