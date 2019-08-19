import React, {Component} from 'react';
import '../App.css';
import {Button , FormGroup, label, Input}
from 'reactstrap';
import Axios from 'axios';
//import Axios from 'axios';
// import {FacebookLoginButton} from 'react-social-login-buttons';


class Forms extends Component {

  constructor(){
    super();
    this.state={
      username:'',
      mypassword:''

    }
   // this.sendData=this.sendData.bind(this)
    this.eventhandler=this.eventhandler.bind(this)
    this.user = this.user.bind(this)
  }
  user(arg) {
    arg.preventDefault()  
    const userObject = this.validateEmail(this.state.username) ? {
            email: this.state.identifier,
            hashedPassword: this.state.password
        } : !isNaN(this.state.identifier) ? {
            userID: this.state.identifier,
            hashedPassword: this.state.password
        } : {
  
        }
        Axios.post('https://jsonplaceholder.typicode.com/posts',{userObject})
        .then(res=>this.setState({sendData: res.data}
         ))
        this.setState({
         identifier: ``,
         password: ``
         })

         console.log(this.state.username,this.state.mypassword);
  }
//   sendData = () =>{
//     console.log(this.state.username,this.state.hpassword);
      
//  }

 eventhandler(e){
   this.setState({[e.target.name] : e.target.value})
   
 }

 validateEmail(username) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return username.match(mailformat) ? true : false
}



render()
{
  return (
   // console.log(this.props.userData),
    <form className="Login-form" >
        
    <h1 className="Text-center">Login Page</h1>
    <h2 className="Text-center">Welcome</h2>
    
    <FormGroup>
      <label>Username</label>
      <Input type="text" name="username" value={this.state.username} onChange={this.eventhandler} placeholder="Username/Email"></Input>
     </FormGroup>
    <FormGroup>
      <label>Password</label>
      <Input type="password" id="mypassword" name="mypassword" value={this.state.mypassword} onChange={this.eventhandler} placeholder="Password"></Input>
    </FormGroup>
    <FormGroup>
      
    <Button outline color="primary" onClick={this.user} >Log in</Button>{' '}
    
    <Button outline color="secondary">Reset</Button>{' '}
    </FormGroup>  
    {/* <div className="text-center pt-3" >or continue with Social Login</div>
    <FacebookLoginButton className="mt-3 mb-3"/> */}
    
    <div className="text-center">
      <a href="/register">Sign up</a>
      <span className="p-2">|</span>
      <a href="/forgot-password">Forgot Password</a>
      
    
    </div>
    </form>

  )
}
}
export default Forms;
