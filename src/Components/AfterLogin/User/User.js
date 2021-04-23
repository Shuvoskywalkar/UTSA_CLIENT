import React, { useEffect, useState } from 'react';
import '../User/User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser,faUserCog } from '@fortawesome/free-solid-svg-icons'
import Profile from './Profile/Profile';
import Onudaan from './Onudaan/Onudaan';
import { Context } from '../../../App';
import { useContext } from 'react';
import Ongshogrohon from './Profile/Ongshogrohon/Ongshogrohon';
const User = () => {
    const[Loggedin,setLoggedingnedIN]=useContext(Context)
    const [Data,setData]=useState({})

    const{email}=Loggedin
  useEffect(()=>{
  
    fetch(`https://utsa-official-server.herokuapp.com/getTheUserProfile?Email=${email}`)
       .then(res=>res.json())
       .then(result=>{
      setData(result)
      console.log(result)
    })
  
  },[])

    const [state,setState]=useState({
        Profile:true,
       Onudaan:false,
        Ongshogrohon:false
    })
    console.log(state)
   
    const ProfileHandler=()=>{
     
        const newstate={
            Profile:true,
           Onudaan:false,
            Ongshogrohon:false
        }
        setState(newstate)

        
    }
    
    const OnudaanHandler=()=>{
    
        const newstate2={
            Profile:false,
           Onudaan:true,
            Ongshogrohon:false
        }
        setState(newstate2)
    }
    const OngshogrohonHandler=()=>{
    
        const newstate3={
            Profile:false,
           Onudaan:false,
            Ongshogrohon:true
        }
        setState(newstate3)
    }
    
    
    return (
        <div>
            <div className="bg-brown row"  style={{width:"1295px"}}>
            
            <div className="bg-dark text-white d-flex" style={{height:"160px",width:"1295px"}}>
            <img src="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.0-9/117231889_3184136298301729_4114266108029891020_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=IBfJ56fdZSYAX_SvfEp&_nc_ht=scontent.fdac24-1.fna&oh=8f5e48e023dfa8fab8497664f0e0eb35&oe=5FE7D67F" alt="not loading" className="img-fluid  mb-1"  style={{width:'130px',marginLeft:"50px",marginTop:"35px"}}/>

                <h3 className="mt-5 text-center" style={{marginLeft:"385px"}}>Wellcome
                <span className="text-warning"> Dear User</span><br/><br/> to the User page</h3></div>

            
<div className="col-md-2 bg-dark pt-4" style={{height:'752px'}}>
<div className="ml-4">
    
 <p className="text-light pl-3 w-100 my-5 icon" onClick={ProfileHandler}>
<FontAwesomeIcon className="" style={{fontSize:"24px"}} icon={faUserCog}/><span className="font-weight-bold"> Profile
</span> 
</p>
<i style={{fontSize:"24px"}} onClick={OnudaanHandler} class="fas fa-donate icon pl-3 w-100 my-5 text-light">  অনুদান</i>
<i style={{fontSize:"24px"}} onClick={OngshogrohonHandler} class="fas icon fa-microphone-alt w-100 my-5 text-light ml-3"> অংশগ্রহন</i>
<div className="icon text-danger align-self-end " onClick={()=>{setLoggedingnedIN(Loggedin.email="")}} style={{alignSelf:"end",marginTop:"260px",position:"absolute"}}>
<i style={{fontSize:"25px"}} class="fas fa-sign-out-alt w-100 pl-3  font-weight-bold" > <strong> Sign Out</strong></i>
</div>
</div>
</div>
<div className="col-md-10 rightContainer" style={{backgroundColor:"Grey"}}>
{state.Profile && <Profile Data={Data}/>}
               {state.Onudaan && <Onudaan Data={Data}/>}
               {state.Ongshogrohon && <Ongshogrohon/>}
</div>
</div> 
        </div>
    );
};

export default User;