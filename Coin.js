import React from 'react'
import './Coin.css'
import { Link } from "react-router-dom"
import ugc from './images/unguardedcoin.png';
import BLOCKCHAIN from './images/BLOCKCHAIN.png';


const Coin = () => {
  return (
    <div className='coin'>
        <div className='container'>
            <div>
              <Link to='/Bank'> <img source src={ugc} className="image" /></Link> 
                <img source src={BLOCKCHAIN} className="image1"/>
            <div>
        </div>
    </div>
    </div>
  <div>
 </div>
</div>          
  )
}

export default Coin