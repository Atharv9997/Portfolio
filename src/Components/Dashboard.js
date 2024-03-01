import React, { Component } from 'react'
import {collection, query, orderBy, onSnapshot} from '@firebase/firestore'
import { firestore } from './Firebase';
import {auth} from './Firebase'
import {signOut} from "firebase/auth";
import Image1 from '../Images/page.png'
import Image2 from '../Images/Mpage.png'
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const ref = collection(firestore,"Messages")
const que = query(ref, orderBy('createdAt','desc'))
export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            messageList: []
        }
    }

    componentDidMount(){
        onSnapshot(que, (snapshot) =>{
            let messageList = []
            snapshot.docs.forEach((doc)=>{
                messageList.push({...doc.data(), id: doc.id})
            })
            this.setState({
                messageList: messageList
            })
        })
    }
    handleLogOut=()=>{
        signOut(auth).then(() => {
            alert("You are logged out");
            this.props.navigate('/')
          }).catch((error) => {
            console.log(error)
          });
    }

  render() {
    return (
        <div className='DashboardSection'>
            {window.innerWidth > 786 ? <img src={Image1} alt='Intro' width='100%'></img> :<img src={Image2} alt='Intro' width='100%'></img>}
            <div className='Home'>
                <Link to='/'>Home</Link>
                <button type='submit' onClick={()=>this.handleLogOut()}>Logout</button>
            </div>
            <div className='DS-1'>
                <div className='rectD'></div>
                <div className='DS1-1'>
                    <h1>Dashboard</h1>
                </div>
                <div className='rectD'></div>
            </div>
            
            <div className='InfoTable'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile Number</th>
                            <th>Email</th>
                            <th>Enquiry</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.messageList && this.state.messageList.length > 0 && this.state.messageList.map((data,index)=>(
                        <tr key={index}>     
                            <td>{data.UserName}</td>
                            <td>{data.UserNumber}</td>
                            <td>{data.UserEmail}</td>
                            <td>{data.UserText}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    )
  }
}

export function DashboardH (props){
    const navigate = useNavigate()
    return(<Dashboard navigate={navigate}/>)
  }