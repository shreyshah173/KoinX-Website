import React from 'react';
import './Check.css'
import img1 from '../Images/Check1.JPG'
import img2 from '../Images/Check2.JPG'

const Check = () => {
    return (
        <div style={{display:'flex' ,height: '50%'}} >
            <div className="card card1" style={{ width: '40%' ,height: '50%' , marginLeft:'5%'}}>
                <div className="card-body" style={{ height: '50%' }}>
                    <img src={img1} alt="placeholder" className="card-img-left" height={'50%'} width={'50%'}/>
                    <div style={{ height: '50%' }}>
                        <h5 className="card-title"  style={{color:'white'}}>Calculate Your<br></br> Profits</h5>
                        <a href="#" className="btn btn-primary">Check Now</a>
                    </div>
                </div>
            </div>
            <div className="card card2" style={{ width: '40%' ,height: '50%' , marginLeft:'8%'}}>
                <div className="card-body" style={{ height: '50%' }}>
                    <img src={img2} alt="placeholder" className="card-img-left" height={'50%'} width={'50%'}/>
                    <div style={{ height: '50%' }}>
                        <h5 className="card-title" style={{color:'white'}}>Calculate Your Tax Liability</h5>
                        <a href="#" className="btn btn-primary">Check Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Check;
