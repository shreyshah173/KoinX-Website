import React from 'react'
import Member from '../Components/Member'
import img1 from '../Images/Member1.JPG'
import img2 from '../Images/Member2.JPG'
import img3 from '../Images/Member3.JPG'

const Team = () => {
    const details = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis laborum harum accusamus numquam nam veritatis omnis dolorem ullam voluptatibus. Illum suscipit accusamus tempore cum dolor magni ratione quibusdam incidunt minus eaque! Eos corporis, et iusto cum recusandae odio accusantium.';
  return (
    <div style={{backgroundColor:'white' , width:'77%' , padding:'1em' , margin:'1em' , borderRadius:'1em'}}>
        <h2>Team</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias unde dignissimos a vero quas expedita animi debitis dolores.</p>
        <Member img={img1} name={'John Smith'} designation={'Designation here'} detail={details}/>
        <Member img={img2} name={'Elina Williams'} designation={'Designation here'} detail={details}/>
        <Member img={img3} name={'John Smith'} designation={'Designation here'} detail={details}/>
    </div>
  )
}

export default Team