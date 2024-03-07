import React from 'react';

const Member = ({ img, name, designation, detail }) => {
    return (
        <div style={{backgroundColor:'rgba(233,245,253,255)', margin:'1em',borderRadius:'1em' ,display: 'flex', flexDirection: 'column' , paddingLeft:'1em' , paddingTop:'1em' ,width:'90%'}}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}>
                <img src={img} alt={name} style={{ width: '100px', marginRight: '16px' }} />
                <span>{detail}</span>
            </div>
            <div style={{ }}>
                <h5>{name}</h5>
                <p>{designation}</p>
            </div>
        </div>
    );
};

export default Member;
