import React from 'react'
import Circle from '../Components/Circle'
import Blocks from '../Components/Blocks'

const Sentiments = () => {
    return (
        // everything here in the next line like padding margin borderradius etc
        <div style={{ backgroundColor:'white' , width:'77%' , padding:'1em' , margin:'1em' , borderRadius:'1em'}}> 
            <h3>Sentiments</h3>
            <h5>Key Events</h5>
            <Blocks />
            <h5 style={{fontSize:'1.2em' , marginBottom:'1.1em' , fontWeight:'1.1em'}}>Analyst Estimates</h5>
            <Circle buy={76} sell={16} hold={8}/>
        </div>
    )
}

export default Sentiments