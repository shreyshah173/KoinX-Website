import React from 'react'
import '../Sections/ChartSection.css'
import PriceChart from '../Components/PriceChart'
// import PriceChart from '../Components/PriceChart'

const ChartSection = ({coinId}) => {

    return (
        <>
            {/* <PriceChart /> */}
            <PriceChart coinId={coinId} coinDays='7' />
        </>
    )
}

export default ChartSection