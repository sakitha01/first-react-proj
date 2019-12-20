import React from 'react';

class login extends React.Component{
    render(){
        return(
    <div class="card">
      <div class="card-block">
      <div class="form-header purple darken-4">
            <h3><i class="fa fa-lock"></i> Login:</h3>
        </div>
        <div class="md-form">
        <i class="fa fa-envelope prefix"></i>
        <input type="text" id="form2" class="form-control"></input>
        <label for="form2">Your email</label>
        </div>
        <div class="md-form">
        <i class="fa fa-lock prefix"></i>
        <input type="password" id="form4" class="form-control"></input>
        <label for="form4">Your password</label>
        </div>
        <div class="text-center">
        <button class="btn btn-deep-purple">Login</button>
        </div>
        <div class="modal-footer">
        <div class="options">
        <p>Not a member? <a href="signup">Sign Up</a></p>
        <p>Forgot <a href="#">Password?</a></p>
          </div>
        </div>
      </div>
      </div>
        );
    }

}
export default login;