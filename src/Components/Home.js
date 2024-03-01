import React, { Component } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import {addDoc,collection, serverTimestamp} from '@firebase/firestore'
import { firestore } from './Firebase';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './Firebase'
import './HomeCSS.css'
import Image1 from '../Images/page.png'
import Image3 from '../Images/Click.png'
import Image4 from '../Images/Frame.png'
import Image5 from '../Images/Scroll.png'
import Image7 from '../Images/Frame2.png'
import Image9 from '../Images/left.png'
import Image10 from '../Images/right.png'
import Logo1 from '../Images/Biencaps.png'
import Logo2 from '../Images/Mascot.png'
import Earth from '../Images/Earth.png'
import Man1 from '../Images/Man1.png'
import Man2 from '../Images/Man2.png'
import Man3 from '../Images/Man3.png'
import Man4 from '../Images/Man4.png'
import MPage from '../Images/Mpage.png'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';



const ref = collection(firestore,"Messages")
export default class Home extends Component {
  
  constructor(props){
    super(props);
    this.captcha=null;
    this.state={
      touch0:false,
      touch1:false,
      touch2:false,
      touch3:false,
      touch4:false,
      touch5:false,
      proj1:0,
      proj2:0,
      verify:false,
      UserName:'',
      UserNumber: '',
      UserText: '',
      UserEmail:'',
      fill1:false,
      fill2:false,
      fill3:false,
      fill4:false
    }
  }

  handleClick =(index)=>{
    this.setState({
      [`touch${index}`]:!this.state[`touch${index}`]
    })
  }
  handleClickR=(index)=>{
    this.setState({
      [`proj${index}`]:this.state[`proj${index}`] < 1 ? this.state[`proj${index}`]+1: 1
    })
  }
  handleClickL=(index)=>{
    this.setState({
      [`proj${index}`]:this.state[`proj${index}`] > 0 ? this.state[`proj${index}`]-1 : 0
    })
  }
  handleVerify =() =>{
    this.setState({
      verify: true
    })
  }
  handleValue=(e)=>{
    if((e.key !== "" && e.key >= '0' && e.key <='9') || e.key === "Backspace" || e.key === "Delete" ){
      return true
    }else{
      return e.preventDefault()
    }
  }
  handleTextChange =(e)=>{
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  validateFields = () => {
    let error = false;
    if(this.state.UserName==='' ){
      this.captcha.reset();
      error = true;
      this.setState({
        fill1:true
      })
    }
    else{
      this.setState({
        fill1:false
      })
    }
    if(this.state.UserNumber==='' || this.state.UserNumber.length < 10){
      this.captcha.reset();
      error = true;
      this.setState({
        fill2:true
      })
    }
    else{
      this.setState({
        fill2:false
      })
    }
    if(this.state.UserText===''){
      this.captcha.reset();
      error = true;
      this.setState({
        fill3:true
      })
    }
    else{
      this.setState({
        fill3:false
      })
    }
    if(this.state.UserEmail===''){
      this.captcha.reset();
      error = true;
      this.setState({
        fill4:true
      })
    }
    else{
      this.setState({
        fill4:false
      })
    }
    return error
  }
  handleSubmit = async (e)=>{
    e.preventDefault();
    const validation = await this.validateFields();
    if(!this.state.fill1 && !this.state.fill2 && !this.state.fill3 && !this.state.fill4 && !validation) {
      let data ={
        UserName :this.state.UserName,
        UserNumber: this.state.UserNumber,
        UserText: this.state.UserText,
        UserEmail: this.state.UserEmail,
        createdAt : serverTimestamp()
      }
      try{
        addDoc(ref,data);
        this.captcha.reset();
        alert("Query Successfully Submitted")
        this.setState({
          UserName:'',
          UserNumber: '',
          UserText: '',
          UserEmail:'',
          fill1:false,
          fill2:false,
          fill3:false,
          fill4:false
        })
      }catch(e){
        console.log(e);
      }
    }
  }
  handleLogIn=()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        this.props.navigate('/Dashboard')
      } else {
        this.props.navigate('/Login')
      }
    });
  }

  render() {
    const {touch0,touch1,touch2,touch3,touch4,touch5} = this.state;
    const {proj1,proj2} = this.state;
    const {UserName,UserNumber,UserText,UserEmail}= this.state;
    const {fill1,fill2,fill3,fill4} =this.state
    
    return (
      <div>
        <div className='IntroSection'>
          {window.innerWidth > 786 ? <img src={Image1} alt='Intro' width='100%'></img> :<img src={MPage} alt='Intro' width='100%'></img>}
          <div className='Login'>
            <button type='submit' onClick={()=>this.handleLogIn()}>Dashboard</button>
          </div>
          <div className='Animation1'>
            <div className='Man1'>
              <img src={Man1} alt='man' width='80px'></img>
            </div>
            <div className='Earth1'>
              <img src={Earth} alt='earth' width='100%'></img>
            </div>
          </div>
          <div className='IntroMain'>
            <div className='Intro1'>
              <div className='rect1-1'></div>
              <h3>A message from Earth</h3>
            </div>
            <div className='IntroText'>
              <h1>Hello Fellow Galaxy People</h1>
            </div>
            <div className='Intro2'>
              <h3>A message from Earth</h3>
              <div className='rect1-2'></div>
            </div>  
            <div className='IntroText1'>
              <h1>I am Atharv</h1>
            </div>
          </div>
          
          {touch0 ? 
          <div className="Click1-2">
            <img onClick={()=> this.handleClick(0)} src={Image4} alt='frame' width='500px' height='200px'></img>
            <p onClick={()=> this.handleClick(0)}>Hello! I am Atharv Khandke,
              <br></br> I am an aspiring Web Developer,
              <br></br> Welcome to my Portfolio Website.</p>
          </div> :
          <div className='Click1-1'>
            <img onClick={()=> this.handleClick(0)} src={Image3} alt='click' width='150px'></img>
          </div>}
          <div className='scroll'>
            <img src={Image5} alt='scroll' width='60px' height='70px'></img>
          </div>
        </div>


        <div className='S2'>
        {window.innerWidth > 786 ? <img src={Image1} alt='Intro' width='100%'></img> :<img src={MPage} alt='Intro' width='100%'></img>}
          <div className='Animation2'>
            <div className='Man2'>
              <img src={Man2} alt='man' width='90px'></img>
            </div>
            <div className='Earth2'>
              <img src={Earth} alt='earth' width='100%'></img>
            </div>
          </div>
          <div className='S2-1'>
            <div className='rect2'></div>
            <div className='S2-2'>
              <h1>My Skills</h1>
            </div>         
            <div className='rect2'></div>
            <div className='S2-4'>
              <h2>Here is a list of some of my skills</h2>
            </div>
          </div>
          <div className='S2-5'>
            <img src={Image5} alt='scroll' width='60px' height='70px'></img>
          </div>
          {touch1 ? 
          <div className="Click2-2">
            <div className='Skills'>
              <div onClick={()=> this.handleClick(1)} className='SkillsText'>
                <img src={Image7} alt='frame2' width='150px'></img>
                <h3>HTML 5</h3>
              </div>
              <div onClick={()=> this.handleClick(1)} className='SkillsText'>
                <img src={Image7} alt='frame2' width='150px'></img>
                <h3>CSS 3</h3>
              </div>
              <div onClick={()=> this.handleClick(1)} className='SkillsText'>
                <img src={Image7} alt='frame2' width='150px'></img>
                <h3>Javascript</h3>
              </div>
              <div onClick={()=> this.handleClick(1)} className='SkillsText'>
                <img src={Image7} alt='frame2' width='150px'></img>
                <h3>React JS</h3>
              </div>
              <div onClick={()=> this.handleClick(1)} className='SkillsText'>
                <img src={Image7} alt='frame2' width='150px'></img>
                <h3>C</h3>
              </div>
              <div onClick={()=> this.handleClick(1)} className='SkillsText'>
                <img src={Image7} alt='frame2' width='150px'></img>
                <h3>C++</h3>
              </div>
              <div onClick={()=> this.handleClick(1)} className='SkillsText'>
                <img src={Image7} alt='frame2' width='150px'></img>
                <h3>Python</h3>
              </div>
              <div onClick={()=> this.handleClick(1)} className='SkillsText'>
                <img src={Image7} alt='frame2' width='150px'></img>
                <h3>Java</h3>
              </div>
              <div onClick={()=> this.handleClick(1)} className='SkillsText'>
                <img src={Image7} alt='frame2' width='150px'></img>
                <h3>Git</h3>
              </div>
              <div onClick={()=> this.handleClick(1)} className='SkillsText'>
                <img src={Image7} alt='frame2' width='150px'></img>
                <h3>OS</h3>
              </div>
              <div onClick={()=> this.handleClick(1)} className='SkillsText'>
                <img src={Image7} alt='frame2' width='150px'></img>
                <h3>DS</h3>
              </div>
              <div onClick={()=> this.handleClick(1)} className='SkillsText'>
                <img src={Image7} alt='frame2' width='150px'></img>
                <h3>Firebase</h3>
              </div>
            </div>
          </div> :
          <div className='Click2-1'>
            <img onClick={()=> this.handleClick(1)} src={Image3} alt='click' width='150px'></img>
          </div>}
        </div>


        <div className='S3'>
        {window.innerWidth > 786 ? <img src={Image1} alt='Intro' width='100%'></img> :<img src={MPage} alt='Intro' width='100%'></img>}
          
          <div className='Animation3'>
            <div className='Man3'>
              <img src={Man3} alt='man' width='70px'></img>
            </div>
            <div className='Earth3'>
              <img src={Earth} alt='earth' width='100%'></img>
            </div>
          </div>
          <div className='S3-1'>
            <div className='rect3'></div>
            <h1>My Projects</h1>
            <div className='rect3'></div>
            {proj1 === 0 ?
              <div className='Click3-3'>
                <h2>Project 1 : E-Voting System Website</h2>
              </div> :
            <></>}
            {proj1 === 1 ?
              <div className='Click3-3'>
                <h2>Project 2 : WashMartIndia Website Clone</h2>
              </div> :
            <></>}
          </div>
          
          <div className='S3-4'>
            <img src={Image5} alt='scroll' width='60px' height='70px'></img>
          </div>
          <div className='S3-Left'>
            {proj1 > 0 ? <img onClick={()=> this.handleClickL(1)} src={Image9} alt='left' width='40px'></img>:<></>}
          </div>
          <div className='S3-Right'>
            {proj1 < 1 ? <img onClick={()=> this.handleClickR(1)} src={Image10} alt='right' width='40px'></img>:<></>}
          </div>
          {proj1 === 0 ?
            <div className='S3-P'>
            {touch2 ? 
              <div className="Click3-2">
                <img onClick={()=> this.handleClick(2)} src={Image4} alt='frame' width='680px' height='200px'></img>              
                <a href='https://ak-evoting-system-project.netlify.app/' target='_blank' rel="noreferrer">View Site</a>
                <p onClick={()=> this.handleClick(2)}>Tech Stack : HTML, CSS, React JS
                  <br></br>React Modules : Router, Swiper, WebCam, Firebase</p>
              </div> :
              <div className='Click3-1'>
                <img onClick={()=> this.handleClick(2)} src={Image3} alt='click' width='150px'></img>
              </div>}
            </div> :<></>}
          {proj1 === 1 ?
            <div className='S3-P'>
            {touch3 ?
              <div className="Click3-2-1">
                <img onClick={()=> this.handleClick(3)} src={Image4} alt='frame' width='780px' height='220px'></img>
                <a href='https://ak-washmartindia-demo.netlify.app/' target='_blank' rel="noreferrer">View Site</a>
                <p onClick={()=> this.handleClick(3)}>Tech Stack : HTML, CSS, React JS
                  <br></br>React Modules : Router, Google Captcha, Swiper, Firebase
                  <br></br>Database : Firebase Cloud Firestore
                  <br></br>Login Authentication : Firebase Authentication</p>
              </div> :
              <div className='Click3-1'>
                <img onClick={()=> this.handleClick(3)} src={Image3} alt='click' width='150px'></img>
              </div>}
            </div> :<></>}
        </div>
        

        <div className='S4'>
        {window.innerWidth > 786 ? <img src={Image1} alt='Intro' width='100%'></img> :<img src={MPage} alt='Intro' width='100%'></img>}
          <div className='Animation4'>
            <div className='Man4'>
              <img src={Man4} alt='man' width='70px'></img>
            </div>
            <div className='Earth4'>
              <img src={Earth} alt='earth' width='100%'></img>
            </div>
          </div>
          
          <div className='S4-1'>
            <div className='rect4'></div>
            <h1>My Work Experience</h1>
            <div className='rect4'></div>
            {proj2 === 0 ?
              <div className='Click4-3'>
                <a href='https://www.biencaps.com/' target='_blank' rel='noreferrer'><h2><img src={Logo1} alt='logo' width='66px'></img>Biencaps Systems</h2></a>
              </div> :
            <></>}
            {proj2 === 1 ?
              <div className='Click4-3'>
                <a href='https://mascotcreation.com/' target='_blank' rel='noreferrer'><h2><img src={Logo2} alt='logo' width='66px'></img>Mascot Creation</h2></a>
              </div> :
            <></>}
          </div>
          
          
          <div className='S4-4'>
            <img src={Image5} alt='scroll' width='60px' height='70px'></img>
          </div>
          <div className='S4-Left'>
            {proj2 > 0 ? <img onClick={()=> this.handleClickL(2)} src={Image9} alt='left' width='40px'></img>:<></>}
          </div>
          <div className='S4-Right'>
            {proj2 < 1 ? <img onClick={()=> this.handleClickR(2)} src={Image10} alt='right' width='40px'></img>:<></>}
          </div>
          {proj2 === 0 ?
            <div className='S4-P'>
            {touch4 ? 
              <div className="Click4-2">
                <img onClick={()=> this.handleClick(4)} src={Image4} alt='frame' width='600px' height='180px'></img>
                <p onClick={()=> this.handleClick(4)}>Job role : Intern - Web Developer.
                  <br></br>Tech Stack : HTML, CSS, Javascript, React JS.
                  <br></br>Duration : Dec 2022 - Mar 2023.</p>
              </div> :
              <div className='Click4-1'>
                <img onClick={()=> this.handleClick(4)} src={Image3} alt='click' width='150px'></img>
              </div>}
          </div> :<></>}
          {proj2 === 1 ?
            <div className='S4-P'>
            {touch5 ?
              <div className="Click4-2">
                <img onClick={()=> this.handleClick(5)} src={Image4} alt='frame' width='520px' height='180px'></img>
                <p onClick={()=> this.handleClick(5)}>Job role : Intern - Frontend Developer.
                  <br></br>Tech Stack : HTML, CSS, Javascript.
                  <br></br>Duration : Feb 2022.</p>
              </div> :
              <div className='Click4-1'>
                <img onClick={()=> this.handleClick(5)} src={Image3} alt='click' width='150px'></img>
              </div>}
          </div> :<></>}
        </div>


        <div className='S5'>
        {window.innerWidth > 786 ? <img src={Image1} alt='Intro' width='100%'></img> :<img src={MPage} alt='Intro' width='100%'></img>}
          <div className='S5-1'>
            <div className='rect5'></div>
            <h1>Contact Me</h1>
            <div className='rect5'></div>
          </div>
          
          <div className='S5-4'>
            <form>
              <div className={fill1?'S5-FActive':'S5-F'}>
                <div className='FormArea'>
                  <input type='text' placeholder='Name' name="UserName"  value={UserName} onChange={(e)=> this.handleTextChange(e)}></input>
                  {fill1?<span>Please fill data</span>:""}
                </div>
              </div>

              <div className={fill2?'S5-FActive':'S5-F'}>
                <div className='FormArea'>
                  <input type='tel' placeholder='Number' name="UserNumber" value={UserNumber} maxLength={10} onKeyDown={(e)=> this.handleValue(e)} onChange={(e)=> this.handleTextChange(e)}></input>
                  {fill2?<span>Please fill data</span>:""}
                </div>
              </div>

              <div className={fill4?'S5-FActive':'S5-F'}>
                <div className='FormArea'>
                  <input type='email' placeholder='Email' name="UserEmail" value={UserEmail} onChange={(e)=> this.handleTextChange(e)}></input>
                  {fill4?<span>Please fill data</span>:""}
                </div>
              </div>

              <div className={fill3?'S5-FActive':'S5-F'}>
                <div className='FormArea'>
                  <textarea rows="3" cols="26" placeholder='Enquiry' name="UserText" value={UserText} onChange={(e)=> this.handleTextChange(e)}></textarea>
                  {fill3?<span>Please fill data</span>:""}
                </div>
              </div>
              <div className='Captcha'>
                <ReCAPTCHA ref={e => (this.captcha = e)} sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={()=>this.handleVerify()}/>
              </div>
              <div className='S5-Button'>
                <button type='submit' disabled={!this.state.verify} onClick={(e)=>{this.handleSubmit(e)}}>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export function HomeH (props){
  const navigate = useNavigate()
  return(<Home navigate={navigate}/>)
}