import React from 'react'
import CoinSwiper from './CoinSwiper'

const LastSwiper = ({ heading }) => {
    return (
        <div style={{ border: '1px solid white' , display:'inline-block', padding:'1em' , backgroundColor:'white' , borderRadius:'1em' , width:'100%'}}>
            <h4>{heading}</h4>
            <CoinSwiper />
        </div>
    )
}

export default LastSwiper