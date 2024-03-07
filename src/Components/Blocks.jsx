import React from 'react'
import img1 from '../Images/Blocks1.png'
import img2 from '../Images/Blocks2.png'

const Blocks = () => {
    return (
        <div style={{display:'flex' }}>
            <div style={{border:'1px solid #e8f4fd',margin:'1em' ,width:'40%', display:'flex' ,backgroundColor:'#e8f4fd' , borderRadius:'1em'}}>
                <img src={img1} alt='image'  style={{marginTop:'.5em', marginLeft:'.5em'}} height={'30%'} width={'30%'}/>
                <div style={{marginTop:'.5em', marginLeft:'.5em'}}>
                <h6 style={{fontSize:'1.1em'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, est aut impedit</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sit fuga sapiente, mollitia ab minima dolorem perspiciatis, consequatur, ipsam error nulla doloribus. Officia, tenetur voluptatem. </p>
                </div>
            </div>
            <div style={{border:'1px solid #ebf9f4',margin:'1em' ,width:'40%', display:'flex' ,backgroundColor:'#ebf9f4' , borderRadius:'1em'}}>
                <img src={img2} alt='image' style={{marginTop:'.5em', marginLeft:'.5em'}}  height={'30%'} width={'30%'}/>
                <div style={{marginTop:'.5em', marginLeft:'.5em'}}>
                <h6 style={{fontSize:'1.1em'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, est aut impedit</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sit fuga sapiente, mollitia ab minima dolorem perspiciatis, consequatur, ipsam error nulla doloribus. Officia, tenetur voluptatem. </p>
                </div>
            </div>
        </div>
    )
}

export default Blocks