import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../Images/SIdeImage.JPG'

const TopContents = () => {
    return (
        <div >
            <div>
                <Card style={{ width: '18rem', backgroundColor: 'rgba(1,82,255,255)' , color:'white'  , alignItems:'center'}}>
                    <Card.Title>Get Started With CoinX</Card.Title>
                    {/* <Card.Body> */}
                        <Card.Text>
                            With range of features you can equip for free , KoinX allows you to be more educated and aware of your tax reports
                        </Card.Text>
                        <Card.Img variant="top" src={img} />
                        <Button variant="primary">Go somewhere</Button>
                    {/* </Card.Body> */}
                </Card>
            </div>
        </div>
    )
}

export default TopContents