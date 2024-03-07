import React from 'react'
// import ChartSection from '../Sections/ChartSection'
// import CoinData from '../Components/CoinData'
import Performance from '../Sections/Performance'
import Main from '../Sections/Main'
import About from '../Sections/About'
import Tokonomics from '../Sections/Tokonomics'
import Team from '../Sections/Team'
import Sentiments from '../Sections/Sentiments'
import LastSwiper from '../Components/LastSwiper'
import FirstSwiper from '../Components/FirstSwiper'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const Home = () => {

  return (
    <div style={{ fontFamily: '"Manrope", sans-serif', fontOpticalSizing: 'auto', fontWeight: '<weight>', fontStyle: 'normal' }}    >
      {/* <CoinData /> */}
      <Main />
      {/* <ChartSection coinId='bitcoin' /> */}
      <div style={{ width: '77%', margin: '1em', padding: '1em', borderRadius: '1em'}}>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Overview</Button>
          <Button href='#bitcoin' variant="secondary">Fundamentals</Button>
          <Button href='#about' variant="secondary">About</Button>
          <Button href='#sentiments' variant="secondary">Sentiments</Button>
          <Button href='#team' variant="secondary">Team</Button>
          <Button href='#' variant="secondary">Technicals</Button>
          <Button href='#tokenomics' variant="secondary">Tokenomics</Button>
        </ButtonGroup>
      </div>
      <div id='bitcoin'>
        <Performance coinId='bitcoin' />
      </div>
      <div id='sentiments'>
        <Sentiments />
      </div>
      <div id='about'>
        <About coinName='Bitcoin' />
      </div>
      <div id='tokenomics'>
        <Tokonomics />
      </div>
      <div id='team'>
        <Team />
      </div>
      <div style={{ backgroundColor: 'white' }}>
        <FirstSwiper heading='You may also like' />
        <LastSwiper heading='Trending Coins' />
      </div>
    </div>
  )
}

export default Home
