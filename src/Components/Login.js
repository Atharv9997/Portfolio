import React, { Component } from 'react'
import Image1 from '../Images/page.png'
import MPage from '../Images/Mpage.png'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from './Firebase'
import {signInWithEmailAndPassword} from "firebase/auth";
import Footer from './Footer'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            UserEmail:'',
            Password:''
        }
    }
    handleClick=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, this.state.UserEmail, this.state.Password)
            .then((userCredential) => {
                const user = userCredential.user;
                this.props.navigate('/Dashboard');
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage)
                if(errorMessage ==='Firebase: Error (auth/wrong-password).'){
                    alert('Invalid Password')
                }
                if(errorMessage ==='Firebase: Error (auth/invalid-email).'){
                    alert('Invalid Email')
                } 
            });
    }
  render() {
    return (
      <div className='LoginPage'>
        {window.innerWidth > 786 ? <img src={Image1} alt='Intro' width='100%'></img> :<img src={MPage} alt='Intro' width='100%'></img>}
        <div className='HomeL'>
            <Link to='/'>Home</Link>
        </div>
        <div className='LS1'>
            <div className='rectLS'></div>
            <h1>Login</h1>
            <div className='rectLS'></div>
          </div>
        <div className='LS2'>
            <div className='LS-M'>
                <div className='LS2-1'>
                    <h1>Welcome Atharv</h1>
                    <span>Please login to check enquiries</span>
                    <form>
                        <input type='email' placeholder='Email : (atharv@test.com)' onChange={(e)=>{
                            this.setState({
                                UserEmail:e.target.value
                            })}}></input>
                        <input type='password' placeholder='Password : (Atharv@1234)'onChange={(e)=>{
                            this.setState({
                                Password:e.target.value
                            })}}></input>
                        <button type='submit' onClick={(e)=>this.handleClick(e)}>Login</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>       
      </div>
    )
  }
}

export function LoginH (props){
    const navigate = useNavigate()
    return(<Login navigate={navigate}/>)
  }