import React from 'react'
import { Link } from 'react-router-dom';
function Signup_form() {
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
    color: 'black',
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
    <div style={{height: '120vh', backgroundColor:'black'}}>
    <div className="container " >
   <div className="row justify-content-center">
     <div className="col-md-5">
       <div className="card">
         <div className="card-body">
           <h2 className="card-title text-center" style={h2Styles }><span style={spanStyles}> Sign</span> Up</h2>
           <form style={{padding: '0px 50px'}}>
             <div className="form-group1" >
               <label htmlFor="name" style={pstyles}>
                 Name
               </label>
               <input
                 type="text"
                 className="form-control"
                 id="name"
                 placeholder="Enter your name"
                 style={ inputstyles}
               />
             </div>
             <div className="form-group1" >
               <label htmlFor="email" style={pstyles}>
                 Email
               </label>
               <input
                 type="text"
                 className="form-control"
                 id="email"
                 placeholder="Enter your email"
                 style={ inputstyles}
               />
             </div>
           
             <div className="form-group1" >
               <label htmlFor="contact" style={pstyles}>
                 Contact Number
               </label>
               <input
                 type="text"
                 className="form-control"
                 id="contact"
                 placeholder="Enter your contact no."
                 style={ inputstyles}
               />
             </div>
             <div className="form-group1">
              <label htmlFor="gender" style={pstyles}>
                Gender
              </label>
              <select
                type="text"
                className="form-control"
                id="gender"
                style={inputstyles}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group1" >
               <label htmlFor="address" style={pstyles}>
                 Address
               </label>
               <input
                 type="address"
                 className="form-control"
                 id="address"
                 placeholder="Enter your address"
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
             
             
             <div style={{textAlign:'center'}}>
               <button
                 type="submit"
                 style={buttonStylesSignup }>
              Login
               </button>
             </div>
           
             
             
             
           </form>

    
         </div>
       </div>
     </div>
   </div>
 </div>
  </div>
  )
}

export default Signup_form
