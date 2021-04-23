import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import '../LoginPage/Loginn.css'
import  firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config'
import { Context } from '../../App';
import logo from '../Images/logo.jpg'
const Login = () => {

  let history=useHistory()
  let location=useLocation()
  let { from } = location.state || { from: { pathname: "/" } }
  const[Loggedin,setLoggedin]=useContext(Context)


  if(firebase.apps.length<1){
    firebase.initializeApp(firebaseConfig);
}


const [User,setUser]=useState({
  isSigned:false,
  email:"",
  password:"",
  error:"",
  name:""
})
const blurHandler=(e)=>{
  const userinfo={...User}
   userinfo[e.target.name]=e.target.value
   setUser(userinfo)
 

}


  const submitHandler=(e)=>{
  firebase.auth().signInWithEmailAndPassword(User.email, User.password)
  .then((user) => {
    const signed={...User}
    signed.isSigned=true;
    signed.error=""
    setUser(signed)
    setLoggedin(signed)
    history.replace(from);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    const signedError={...User}
    signedError.error=errorMessage
    signedError.isSigned=false
    setUser(signedError)
  });
  e.preventDefault()
  }
  
  //Google
  var Googleprovider = new firebase.auth.GoogleAuthProvider();
   
  const GoogleHandler=(e)=>{
    firebase.auth().signInWithPopup(Googleprovider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
     const GoogleInfo={...User}
     GoogleInfo.name=user.displayName
     GoogleInfo.email=user.email
     GoogleInfo.isSigned=true
     GoogleInfo.error=""
     setUser(GoogleInfo)
     setLoggedin(GoogleInfo)
     history.replace(from);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      var credential = error.credential;
    const GoogleError={...User}
    GoogleError.error=errorMessage
    GoogleError.isSigned=false
    setUser(GoogleError)
    });
    e.preventDefault()
  }

  //Facebook
  var Facebookprovider = new firebase.auth.FacebookAuthProvider();

  const FacebookHandler=(e)=>{
    firebase.auth().signInWithPopup(Facebookprovider).then(function(result) {
      var token = result.credential.accessToken;
     
      var user = result.user;
      const FacebookInfo={...User}
      FacebookInfo.name=user.displayName
      FacebookInfo.email=user.email
      FacebookInfo.isSigned=true
      FacebookInfo.error=""
      setUser(FacebookInfo)
      setLoggedin(FacebookInfo)
      history.replace(from);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      const FacebookError={...User}
      FacebookError.error=errorMessage
     FacebookError.isSigned=false
      setUser(FacebookError)
    });
    e.preventDefault()
  }
    return (
      <body>
        
      
      <section className="">
        <div >
          {console.log(User)}
            <div class="tip ">
            <Link to="/Homepage">
            <img src={logo} alt="not loading" className="img-fluid Tip" />
            </Link>
            </div>
<div  class="cont ">
  <form onSubmit={submitHandler} class="form sign-in ">
    <h2 className="h2">Welcome Here</h2>
    <div className="lablogin">
    <div>
    <label >
      <span>Email</span>
      <input onBlur={blurHandler} className="input" type="email" name="email" />
    </label>
    <br/>
    <label  >
      <span>Password</span>
      <input onBlur={blurHandler}  className="input" type="password" name="password" />
    </label>
    </div>
    </div>
    <button type="submit" class="submit button">Sign In</button>
    {User.isSigned &&<p className="font-weight-bold text-success">Congratulation You Have Succesfully Signed In</p>}
    {User.error &&<p className="font-weight-bold text-danger text-center">{User.error}</p>}
    <button type="button" class="fb-btn button" onClick={FacebookHandler}>Login with <span>facebook</span></button>
    <button type="button" class="fb-btn mt-3 button" onClick={GoogleHandler}>Login with <span className="text-danger">Google</span></button>

  </form>
  <div class="sub-cont ">
    <div class="img">
      <div class="img__text m--up">
        <h2>Need an Website?</h2>
        <p>Give me a chance to make a proffesional website for you</p>
      </div>
      <a href="https://www.facebook.com/Skywalker2219" style={{textDecoration:"none"}} target="_blank" >

      <div class="img__btn">

        <span >
   Hire Me
   </span>
      </div></a>
    </div>
    
  </div>
</div>

        </div>
        </section>
        </body>
    );
};

export default Login;