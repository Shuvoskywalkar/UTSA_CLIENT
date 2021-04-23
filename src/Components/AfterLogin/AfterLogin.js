import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Context } from '../../App';
import '../AfterLogin/Afterlogin.css'
import Admin from './Admin/Admin';
import User from './User/User';
const AfterLogin = () => {
    const[Loggedin,setLoggedin]=useContext(Context)
    const [stable,setstable]=useState(false)
  const {email}=Loggedin
    useEffect(()=>{
        fetch(`https://utsa-official-server.herokuapp.com/getadminemail?email=${email}`)
       .then(res=>res.json())
       .then(data=>{
           if (data.length == 0) {
               const add={...Loggedin}
               add.isAdmin=false
               setLoggedin(add)
           }
           else{
               const add2={...Loggedin}
               add2.isAdmin=true
               setLoggedin(add2)
           }
           console.log(data)

       })
    },[stable])
console.log(Loggedin)
    return (
       <div>
          {Loggedin.isAdmin? <Admin/> :<User/>}
          {/* <User/> */}
        </div>
    );
};

export default AfterLogin;