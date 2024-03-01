import React, { Component } from 'react'
import image1 from '../Images/Github.png'
import image2 from '../Images/LinkedinS.png'
import image3 from '../Images/Insta.png'
import image4 from '../Images/mail.png'
import image5 from '../Images/gitlab.png'
import menu from '../Images/menu.png'
import back from '../Images/back.png'

import './NavbarCSS.css'
export default class Navbar extends Component {

  constructor(props){
    super(props);
    this.state={
      nav:false
    }
  }

  handleClick =()=>{
    this.setState({
      nav: !this.state.nav
    })
  }
  render() {
    const {nav} = this.state
    return (
    <div>
      {window.innerWidth > 786 ? 
      <div className='Navbar'>
        <ul>
            <li><a href='https://github.com/Atharv9997' target="_blank" rel="noreferrer"><img src={image1} alt='github' width='30px'></img></a></li>
            <li><a href='https://gitlab.com/Atharv_9997' target="_blank" rel="noreferrer"><img src={image5} alt='github' width='30px'></img></a></li>
            <li><a href='https://www.linkedin.com/in/atharvkhandke9997/' target="_blank" rel="noreferrer"><img src={image2} alt='linkedin' width='30px'></img></a></li>
            <li><a href='mailto:atharvkhandke6101999@gmail.com'><img src={image4} alt='mail' width='30px'></img></a></li>
            <li><a href='https://www.instagram.com/atharv_9997/' target="_blank" rel="noreferrer"><img src={image3} alt='insta' width='30px'></img></a></li>
        </ul>
      </div> : 
      <div className={nav? 'Navbar3':'Navbar2'}>
        {nav ? <img onClick={()=> this.handleClick()} className='menu' src={back} alt='nav' width='30px'></img>: <img onClick={()=> this.handleClick()} className='menu' src={menu} alt='nav' width='30px'></img>}
        {nav ?
          <ul>
            <li><a href='https://github.com/Atharv9997' target="_blank" rel="noreferrer"><img src={image1} alt='github' width='30px'></img></a></li>
            <li><a href='https://gitlab.com/Atharv_9997' target="_blank" rel="noreferrer"><img src={image5} alt='github' width='30px'></img></a></li>
            <li><a href='https://www.linkedin.com/in/atharvkhandke9997/' target="_blank" rel="noreferrer"><img src={image2} alt='linkedin' width='30px'></img></a></li>
            <li><a href='mailto:atharvkhandke6101999@gmail.com'><img src={image4} alt='mail' width='30px'></img></a></li>
            <li><a href='https://www.instagram.com/atharv_9997/' target="_blank" rel="noreferrer"><img src={image3} alt='insta' width='30px'></img></a></li>
          </ul> : <></>}    
      </div>}
    </div>
    )
  }
}
