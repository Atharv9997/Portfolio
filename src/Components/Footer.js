import React, { Component } from 'react'
import Image1 from '../Images/location.png'
import Image2 from '../Images/call.png'

export default class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className='FS1'>
            <h1>ATHARV KHANDKE</h1>
            <span><img src={Image1} alt='location' width='20px'></img>Pune, Maharashtra, India.</span>
            <h3><img src={Image2} alt='call' width='20px'></img>9130429295</h3>
        </div>
        <div className='FS2'>
            <span>Copyright ©2023 All rights reserved | This page is made with <img src='https://cdn-icons-png.flaticon.com/512/2589/2589175.png' alt='love' width='15px' height='15px'></img> by AK</span>
        </div>
      </div>
    )
  }
}
