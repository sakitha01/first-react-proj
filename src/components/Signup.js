import React from 'react';
import axios from 'axios'

class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstname: '',
        lastname:'',
        password:'',
        confirmpassword:'',
        email:'',
        mblnumber:''

          
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
  
    handleSubmit(event) {
      event.preventDefault();
        if(this.state.password !== this.state.confirmpassword)
        {
            alert("password and confirmpassword should match");
        }else{
            alert('A name was submitted: ' + this.state.password +' '+ this.state.confirmpassword);
           
           axios.post('http://localhost:8080/userreg', {
            firstName: this.state.firstname,
            lastName: this.state.password,
            password: this.state.password,
            email:this.state.email,
            mobileNumber: this.state.mblnumber
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          
          

        }
        
      
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
           First Name:
            <input type="text" name='firstname' value={this.state.firstname} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Last Name:
            <input type="text" name='lastname' value={this.state.lastname} onChange={this.handleChange} />
          </label>
          <br/>
          <label>Password:
          <input type="password" name='password' value={this.state.password} onChange={this.handleChange} />
          </label>
          <br/>
          <label>Confirm Password:</label>
          <input type="password" name='confirmpassword'  value={this.state.confirmpassword} onChange={this.handleChange} />
          <br/>
          <label>Email:</label>
          <input type="text" name='email'  value={this.state.email} onChange={this.handleChange} />
          <br/>
          <label>Mobile Number:</label>
          <input type="text" name='mblnumber'  value={this.state.mblnumber} onChange={this.handleChange} />
          <br/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default Signup;