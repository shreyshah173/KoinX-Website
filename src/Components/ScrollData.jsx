import Stack from 'react-bootstrap/Stack';
import React from 'react';
import { useMediaQuery } from '@mui/material';
import PriceChart from './PriceChart';
import TopContents from './TopContents';

const ScrollData = () => {
    const coinId = 'bitcoin';
    const isMobile = useMediaQuery('(max-width:600px)'); // Define your breakpoint

    return (
        <>
            <p style={{ fontSize: '.7em', position: 'relative', left: '1em', top: '1em', display:'inline-block' }}>cryptocurrencies &gt;&gt; {coinId}</p>
            <Stack direction="horizontal" gap={1}>
                <div className="p-10" style={{ width: '100%', backgroundColor: 'white', margin: '1.5em', borderRadius: '5px' }}>
                    <PriceChart coinId={coinId} />
                </div>
                {!isMobile ? (
                    <div className="p-2" style={{ color: 'white' }}>
                        <TopContents />
                    </div>
                ) : (
                    <></>
                )}
            </Stack>
        </>
    )
}

export default ScrollData;
