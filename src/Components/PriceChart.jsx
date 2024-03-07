import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
import Badge from 'react-bootstrap/Badge';


registerables.forEach(plugin => Chart.register(plugin));

const PriceChart = ({ coinId }) => {
  const coinDays = '7';
  const [chartData, setChartData] = useState(null);
  const [coinDetails, setCoinDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}&order=market_cap_desc&per_page=1&page=1&sparkline=false&locale=en`);
        const data = await response.json();
        if (data.length > 0) {
          const coinData = data[0];
          const formattedData = {
            id: coinData.id,
            name: coinData.name,
            image: coinData.image,
            symbol: coinData.symbol,
            currentPrice: coinData.current_price,
            priceChangePercentage24h: coinData.price_change_percentage_24h,
          };
          setCoinDetails(formattedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [coinId]); // Only fetch data when coinId changes
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${coinDays}`);
        console.log(coinId + ' fetching data for ' + coinDays + ' days')
        const result = await response.json();
        const prices = result.prices.map(price => ({
          x: new Date(price[0]),
          y: price[1],
        }));
        setChartData(prices);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [coinId, coinDays]);


  return (
    <div style={{padding:'1em'}}>
      <div style={{ height: '60%', width: '90%' }}>
        <div>
          {coinDetails ? (
            <div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={coinDetails.image} alt={coinDetails.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                  <div style={{ fontWeight: 'bold', fontSize: '1em' }}>{coinDetails.name} {coinDetails.symbol.toUpperCase()}
                    <span style={{marginLeft:'1.1em'}}>
                      <Badge bg="secondary">Rank #1</Badge>
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <h2 style={{ marginLeft: '.5em' }}>${coinDetails.currentPrice}</h2>
                  <span style={{ display: 'flex', alignItems: 'center', marginLeft: '.5em' }}>
                    <div></div>
                    <span style={{ padding: '2px',margin:'2px', border: `${coinDetails.priceChangePercentage24h >= 0 ? '1px solid lightgreen' : '1px solid rgba(255, 148, 148, 0.8)'}`, borderRadius:'5px',backgroundColor: `${coinDetails.priceChangePercentage24h >= 0 ? 'lightgreen' : 'lightcoral'}`, color: `${coinDetails.priceChangePercentage24h >= 0 ? 'darkgreen' : 'red'}` }}>
                      {coinDetails.priceChangePercentage24h >= 0 ? '+' : ''}{coinDetails.priceChangePercentage24h.toFixed(2)}%
                    </span>
                    
                    (24H)
                  </span>
                </div>

              </div>
            </div>
          ) : (
            <div style={{color:'red'}}>Fetching data from API there might be internet issue or API limit exceeds wait for some time</div>
          )}
        </div>
      </div>

      <div style={{ height: '400px', width: '90%' }}>
        {chartData && (
          <Line
            data={{
              labels: chartData.map(dataPoint => dataPoint.x),
              datasets: [
                {
                  label: 'Price Chart(USD)',
                  data: chartData.map(dataPoint => dataPoint.y),
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor: 'rgba(0, 82, 254, 1)', // Change the line color here
                  pointRadius: 0, // Set pointRadius to 0 to remove points
                  pointHoverRadius: 0, // Set pointHoverRadius to 0 to remove points on hover
                },
              ],
            }}
            options={{
              maintainAspectRatio: false, // Ensure that aspect ratio is not maintained
              // Set aspect ratio to 2.5 times
              scales: {
                x: {
                  type: 'time',
                  time: {
                    unit: 'day',
                  },
                },
                y: {
                  type: 'linear',
                  ticks: {
                    beginAtZero: true,
                  },
                },
              },
            }}
          />
        )}

      </div>
    </div>

  );
};

export default PriceChart;
