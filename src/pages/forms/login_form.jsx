import React from 'react'
import { AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Login_form() {
    const pstyles = {
        color: 'black',
        fontSize: '1.2rem',
        fontWeight:'500',
        marginTop:'5px'
      };
      const spanStyles = {
        color: '#FFE500',
      };
      const inputstyles = {
        color: '#E97451',
        marginRight: '5px',
      };
      const h2Styles = {
        color: 'black',
        fontSize: '3rem',
        fontWeight:'bold',
        marginBottom:'20px'
      };
      const buttonStyles = {
        height: '40px',
        width: '100px',
        marginTop: '20px',
        color: 'white',
        fontWeight:'bold',
        backgroundColor:'black',
        borderRadius:'20px',
        border: '0',
      };
      const buttonStylesSignup = {
        height: '40px',
        width: '250px',
        marginTop: '10px',
        color: 'white',
        fontWeight:'bold',
        backgroundColor:'black',
        borderRadius:'20px',
        border: '0',
      };
  return (
   <div style={{height: '100vh', backgroundColor:'black'}}>
     <div className="container " >
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center" style={h2Styles }><span style={spanStyles}> Sign</span> In</h2>
            <form style={{padding: '0px 50px'}}>
              <div className="form-group1" >
                <label htmlFor="email" style={pstyles}>
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  style={ inputstyles}
                />
              </div>
              <div className="form-group1" style={pstyles}>
                <label htmlFor="password" style={pstyles}>
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  style={ inputstyles}
                />
              </div>
              <div >
                <button
                  type="submit"
              
                  style={buttonStyles}
                >
               Login
                </button>
              </div>
              <div className="text-center mt-4">
                <p style={{fontWeight:'500'}}>
                  Don't have an account?{' '}
                  <Link to="/signup" style={{color:'#ECD71A'}}>
                    Sign up
                  </Link>
                  <div class="vDivider"></div>
                  <p style={{fontWeight:'500' }}>or</p>
                </p>
              
              </div>
            </form>

            <div className="text-center ">
       
              <div className="justify-content-center">
                <button
                  type="submit"
                  style={buttonStylesSignup}
                >
                  <AiFillGoogleCircle style={{marginRight:'10px'}}/>
                  Sign up with Google
                </button>
                <button
                  type="submit"
                  style={buttonStylesSignup}
                >
                  <AiFillFacebook style={{marginRight:'10px'}}/>
                  Sign up with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   </div>
  )
}

export default Login_form
