import React, { useState, useEffect } from 'react';
import SliderChart from '../Components/SliderChart'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';

const Performance = ({ coinId }) => {

    const [coinData, setCoinData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);
                const data = await response.json();
                const selectedCoin = data.find(coin => coin.id === coinId);
                setCoinData(selectedCoin);
                console.log("suceess")
            } catch (error) {
                console.log("failure")
                console.error('Error fetching data ewfh ;w weo;h faw :', error);
            }
        };

        fetchData();
    }, [coinId]);

    return (
        <>
            <div style={{ border: '1px solid white' , display:'inline-block' , margin:'1em' , padding:'1em' , backgroundColor:'white' , borderRadius:'1em' , width:'77%'}}>
                <div>
                    <h2>Performance</h2>
                    <SliderChart todayLow={coinData?.low_24h} todayHigh={coinData?.high_24h} currentPrice={coinData?.current_price} />
                    <SliderChart todayLow={1} todayHigh={100} currentPrice={10} />
                    {/* <SliderChart /> */}
                </div>

                <div>
                    <h2>Fundamentals</h2>
                    {coinData ? (
                        <>
                            <>
                                <div className="d-flex p-2" style={{fontSize:'1.1em'}}>
                                    <Card style={{ border: 'white 1px solid', borderRadius: '0', borderTopLeftRadius: '1em', borderEndStartRadius: '1em', backgroundColor:'white' }}>
                                        <Card.Body>
                                            <Card.Text>
                                                <div style={{ padding: '.1em' }}>{coinData.name} Price: ${coinData.current_price}</div> <hr></hr>
                                                <div style={{ padding: '.1em' }}>24h Low/24h High: ${coinData.low_24h} /  ${coinData.high_24h}</div> <hr></hr>
                                                <div style={{ padding: '.1em' }}>7d Low/7d High : </div> <hr></hr>
                                                <div style={{ padding: '.1em' }}>Trading Volume: ${coinData.total_volume}</div> <hr></hr>
                                                <div style={{ padding: '.1em' }}>Market Cap Rank: {coinData.market_cap_rank}</div> <hr></hr>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ border: 'white 1px solid', borderRadius: '0', borderEndEndRadius: '1em', borderTopRightRadius: '1em', backgroundColor:'white' }}>
                                        <Card.Body>
                                            <Card.Text>
                                                <div style={{ padding: '.1em' }}>Market Cap: ${coinData.market_cap}</div> <hr></hr>
                                                <div style={{ padding: '.1em' }}>Market Cap Dominance: {coinData.market_cap_percentage}%</div> <hr></hr>
                                                <div style={{ padding: '.1em' }}>Volume / Market Cap: {((coinData.total_volume / coinData.market_cap) * 100).toFixed(2)}%</div> <hr></hr>
                                                <div style={{ padding: '.1em' }}>All Time High: ${coinData.ath}</div> <hr></hr>
                                                <div style={{ padding: '.1em' }}>All Time Low: ${coinData.atl}</div> <hr></hr>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </>

                        </>
                    ) : (
                        <>
                            <tagtrial>
                                <div className="d-flex p-2">
                                    <div style={{ border: 'white 1px solid', borderRadius: '0', borderTopLeftRadius: '1em', borderEndStartRadius: '1em',  margin:'1em' }}>
                                        <Card.Body>
                                            <Card.Text>
                                                <div style={{ padding: '.1em' }}>BitCoin Price: $16815.46</div><hr></hr>
                                                <div style={{ padding: '.1em' }}>24h Low/24h High: $16382.07 /  $16874.12</div><hr></hr>
                                                <div style={{ padding: '.1em' }}>7d Low/7d High : $16382.07 / $16874.12</div><hr></hr>
                                                <div style={{ padding: '.1em' }}>Trading Volume: $23249202782</div><hr></hr>
                                                <div style={{ padding: '.1em' }}>Market Cap Rank: #1</div><hr></hr>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div style={{ border: 'white 1px solid', borderRadius: '0', borderEndEndRadius: '1em', borderTopRightRadius: '1em' , margin:'1em' }}>
                                        <Card.Body>
                                            <Card.Text>
                                                <div style={{ padding: '.1em' }}>Market Cap: $323507290047</div><hr></hr>
                                                <div style={{ padding: '.1em' }}>Market Cap Dominance: 38.343%</div><hr></hr>
                                                <div style={{ padding: '.1em' }}>Volume / Market Cap: 0.0718%</div><hr></hr>
                                                <div style={{ padding: '.1em' }}>All Time High: $69.044.77</div><hr></hr>
                                                <div style={{ padding: '.1em' }}>All Time Low: $67.81</div><hr></hr>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                </div>
                            </tagtrial>
                            <div>Fetching data from</div>
                        </>

                    )}
                </div>
            </div>
        </>
    )
}

export default Performance