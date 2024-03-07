import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img from '../Images/MiniGraph.JPG';

const CoinSwiper1 = () => {
    const [coins, setCoins] = useState([]);
    const [error, setError] = useState(null);
    const [sparklines, setSparklines] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
                if (!response.ok) {
                    throw new Error('API limit reached or other error');
                }
                const data = await response.json();
                setCoins(data);

                // Fetch sparkline data
                const sparklineResponse = await fetch('https://api.coingecko.com/api/v3/search/trending');
                if (!sparklineResponse.ok) {
                    throw new Error('Failed to fetch sparkline data');
                }
                const sparklineData = await sparklineResponse.json();
                const sparklinesMap = {};
                sparklineData.coins.forEach((coin) => {
                    sparklinesMap[coin.item.id] = coin.item.data.sparkline;
                });
                setSparklines(sparklinesMap);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    coins.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);

    return (
        <div>
            {error ? (
                <>
                    <p style={{ color: 'red' }}>API limit reached {error}</p>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        navigation={true}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('Slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {/* Your JSX for error handling here */}
                    </Swiper>
                </>
            ) : (
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    navigation={true}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('Slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {coins.map((coin) => (
                        <SwiperSlide key={coin.id}>
                            <div className="coin-card" style={{ border: 'grey 1px solid', padding: '1em', borderRadius: '1em' }}>
                                <img src={coin.image} alt={coin.name} height={'13%'} width={'13%'} />
                                <a style={{ marginLeft: '.3em', fontSize: '1.2em' }}>{coin.symbol.toUpperCase()}</a>
                                <div className="coin-info" style={{ display: 'inline-block' }}>
                                    <span style={{ padding: '2px', margin: '4px', border: `${coin.price_change_percentage_24h >= 0 ? '1px solid lightgreen' : '1px solid rgba(255, 148, 148, 0.8)'}`, borderRadius: '5px', backgroundColor: `${coin.price_change_percentage_24h >= 0 ? 'lightgreen' : 'lightcoral'}`, color: `${coin.price_change_percentage_24h >= 0 ? 'darkgreen' : 'red'}` }}>
                                        {coin.price_change_percentage_24h >= 0 ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
                                    </span>
                                </div>
                                <p style={{ fontSize: '1.3em' }}>${coin.current_price}</p>

                                {sparklines[coin.id] ? (
                                    <img src={sparklines[coin.id]} alt="" height={'70%'} width={'70%'} style={{ marginLeft: '2.5em' }} />
                                ) : (
                                    <p>Image not available in sparkline</p>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default CoinSwiper1;
