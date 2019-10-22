
import React, { Component } from 'react';
import './Login.css'
import axios from 'axios';

class Login extends Component {

  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
    Email: '',
    Password: ''
    
    }
  }
  onChangeEmail(e) {
    this.setState({
     Email: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    })  
  }
 

  onSubmit(e) {
    e.preventDefault();
    const obj = {
    Email: this.state.Email,
    Password: this.state.Password,
    

    };
    axios.post('http://localhost:4000/auth/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
     Email: '',
     Password: '',
     
    })
  }

  render(){
  return (
   <div class="outer">
      {/* <img src="https://i.pinimg.com/originals/d0/de/c9/d0dec9a309ac8b592051805da3c47008.jpg" class="img-responsive portfolio_frontpage"/> */}
         <div class="container">
        <div class="row portfolio-block">
            <div class="portfolio_description" style={{textAlign:'center'}}>
              <div className="card col-md-12">
              <h2>Login</h2>
                <p>Please enter your valid information</p> <span class="read_more"></span>
                <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                value={this.state.Email}
                onChange={this.onChangeEmail}
               />
               
                </div>
                <div class="form-group">
            
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                 value={this.state.Password}
                 onChange={this.onChangePassword}
                />
               
                </div>
                
                <div>
                                  <div class="row">
                <div class="col-md-6 form-check" >
              
                <p>
                  <label>
                  <input type="checkbox" />
                    <span>Remember Me</span>
                  </label>
                </p>
                </div>
                <div class=" col-md-6 form-check">
                <p>Forgot password?</p>
                </div>
                </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Login" className="btn btn-primary btn-lg btn-block"/>
                </div>
                {/* <button type="button" class="btn btn-primary btn-lg btn-block" >Login</button> */}
                </form>
                <div className="row" style={{marginTop:10}}>
                <p class=" col-md-6">Don't have an account?</p> 
                <span class=" col-md-6"> <a href="#">Click here to create an Account</a>
                </span>
                </div>
               
              </div>
               
            </div>
        </div>
    
 </div>
 </div>
  );
}
}
export default Login;
