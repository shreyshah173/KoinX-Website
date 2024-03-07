import React from 'react';
import Placeholder from 'react-bootstrap/Placeholder';

function Circle({ buy, sell, hold }) {
    // Determine the maximum value and its label
    let maxLabel = '';
    let maxValue = 0;
    if (buy >= sell && buy >= hold) {
        maxLabel = 'Buy';
        maxValue = buy;
    } else if (sell >= buy && sell >= hold) {
        maxLabel = 'Sell';
        maxValue = sell;
    } else {
        maxLabel = 'Hold';
        maxValue = hold;
    }

    // Calculate the total percentage sum
    const totalPercentage = buy + sell + hold;

    // Calculate the xs value for each Placeholder based on the percentage
    const buyXs = Math.round((buy / totalPercentage) * 12);
    const sellXs = Math.round((sell / totalPercentage) * 12);
    const holdXs = Math.round((hold / totalPercentage) * 12);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Circle */}
            {maxLabel && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        backgroundColor: maxLabel === 'Buy' ? '#ebf9f4' : maxLabel === 'Sell' ? 'red' : 'grey',
                        color: maxLabel === 'Buy' ? '#00b386' : 'white',
                        fontSize: '1.6em',
                        marginRight: '20px' // Add some space between circle and placeholders
                    }}
                >
                    {`${maxValue}%`}
                </div>
            )}

            {/* Display Placeholder components with xs values based on percentages */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div>{`Buy : `}</div>
                    <Placeholder xs={buyXs}  style={{ borderRadius: '1em', marginLeft: '10px', height: '10px' , backgroundColor:'#00b386' }}></Placeholder>
                    <div style={{}}>{` ${buy}%`}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div>{`Sell :`}</div>
                    <Placeholder xs={sellXs} style={{ borderRadius: '1em', marginLeft: '10px', height: '10px' , backgroundColor:'#f7324c' }}></Placeholder>
                    <div style={{}}>{`${sell}%`}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>{`Hold`}</div>
                    <Placeholder xs={holdXs} bg="secondary" style={{ borderRadius: '1em', marginLeft: '10px', height: '10px' }}></Placeholder>
                    <div style={{}}>{`${hold}%`}</div>
                    <div style={{ marginLeft: '20em', color: 'white' }}>{`${hold}%`}</div>
                </div>
            </div>
        </div>
    );
}

export default Circle;
