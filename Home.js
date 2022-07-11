import React from 'react'
import ug from './images/ug.mp4';
import ug1 from './images/ug1.mp4';
import md from './images/Modells.png';
import vk from './images/VKTRY.png';
import eb from './images/Eastbay.png';
import ns from './images/noise_5.mp4';
import Pricing from './Pricing';
import Coin from './Coin';
import './home.css'

const Home = () => {
    return  (
    <section>
    <div className="app">
        <video autoPlay loop muted style={{width: "100%" }}>
        <source src={ug} type="video/mp4"/>
        </video>
        <a href="https://story.snapchat.com/p/fd6a75d9-4d34-4a2b-89e1-33d8e8a9d7f4/1683521525870592"><video autoPlay loop muted style={{ width: "100%"}}>
        <source src={ug1} type="video/mp4"/>
    </video></a>
    </div>
    <h1>BRAND COLLABORATIONS</h1>
      <h2>BRAND COLLABORATIONS</h2>
      <h3>BRAND COLLABORATIONS</h3>
      <h4>BRAND COLLABORATIONS</h4>
      <h5>BRAND COLLABORATIONS</h5>
      <h6>BRAND COLLABORATIONS</h6>
  <div className="row">
    <div className="column">
        <a href="https://www.youtube.com/watch?v=JChojiq_OY4"> <img source src={md} width="100%" alt='' /></a>
    </div>
    <div className="column">
        <a href="https://www.instagram.com/p/BqGQv-DBXhA/"><img source src={vk} width="100%" alt='' /></a>
    </div>
    <div className="column">
        <a href="https://www.youtube.com/watch?v=gytfgA2DPsot=4s"><img source src={eb} width="100%" alt='' /></a>
        </div>
    </div>
    <div>
    <br/>
    <section className="about">
                    <div className="video">
                        <video autoPlay loop muted style={{width: "100%"}}>
                        <source src={ns} type="video/mp4"/>
                        </video> 
                    </div>
                  </section>
                 </div>
             <Pricing/>
            <Coin/>
    </section>
    )
}

export default Home;