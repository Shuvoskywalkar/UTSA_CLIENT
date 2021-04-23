import React, { useContext, useState } from 'react';

import '../Admin/Admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faCoffee,faPlus,faUserCog, faUserShield } from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/Image';
import Aos from 'aos'
import 'aos/dist/aos.css'
import icons from 'glyphicons'
import Addadmin from './AddAdmin/Addadmin';
import Addmember from './AddMember/Addmember';
import Members from './Members/Members';
import { Context } from '../../../App';
import OnudaanValue from './OnudaanValue/OnudaanValue';

const Admin = () => {
    const[Loggedin,setLoggedingnedIN]=useContext(Context)

    const [state,setState]=useState({
        AddAdmin:true,
       Comitee:false,
        AddMember:false,
        OnudanValue:false
    })
    console.log(state)
   
    const AddAdminHandler=()=>{
     
        const newstate={
            AddAdmin:true,
           Comitee:false,
            AddMember:false,
            OnudanValue:false,
            OnudanValue:false

        }
        setState(newstate)

        
    }
    
    const ComiteeHandler=()=>{
    
        const newstate2={
            AddAdmin:false,
           Comitee:true,
            AddMember:false,
            OnudanValue:false

        }
        setState(newstate2)
    }
    const addMemberHandler=()=>{
        const newstate3={

            AddAdmin:false,
           Comitee:false,
            AddMember:true,
            OnudanValue:false

        }
        setState(newstate3)
    }
    const DonateHandler=()=>{
        const newstate4={

        AddAdmin:false,
        Comitee:false,
         AddMember:false,
         OnudanValue:true
        }
        setState(newstate4)

    }
    return (
        <div >
                        <div className="bg-brown   row" style={{width:"1295px",height:"auto"}}>
            
            <div className="bg-dark text-white  d-flex " style={{height:"160px",width:"1295px"}}>

            <img src="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.0-9/117231889_3184136298301729_4114266108029891020_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=IBfJ56fdZSYAX_SvfEp&_nc_ht=scontent.fdac24-1.fna&oh=8f5e48e023dfa8fab8497664f0e0eb35&oe=5FE7D67F" alt="not loading" className="img-fluid mb-4" style={{width:'130px',marginLeft:"50px",marginTop:"30px"}}/>
                <h3 style={{marginLeft:"350px"}} className="mt-4 text-center" >
                    Wellcome....
                 <span className="text-warning">  
                   Respected Admin</span><br/> <br/>  to the Admiin page</h3></div>

            
<div className="col-md-2 bg-dark pt-4" style={{height:'735px'}}>
<div className="ml-2">
    

<i style={{fontSize:"22px"}}  onClick={AddAdminHandler} class="fas fa-user-shield icon pl-3 w-100 my-5 text-light"> Add Admin</i>
<i style={{fontSize:"24px"}} onClick={ComiteeHandler} class="fas fa-users icon pl-3 w-100 my-5 text-light"> Comittee</i>
<i style={{fontSize:"20px"}}  onClick={addMemberHandler} class="fas icon fa-user-plus w-100 my-5 text-light ml-3"> Add Member</i>
<i style={{fontSize:"20px"}}  onClick={DonateHandler} class="fas icon fa-donate w-100 my-5 text-light ml-3">Donations</i>
<div className="icon text-danger align-self-end " onClick={()=>{setLoggedingnedIN(Loggedin.email="")}} style={{alignSelf:"end",marginTop:"160px",position:"absolute"}}>
<i style={{fontSize:"25px"}} class="fas fa-sign-out-alt w-100 pl-3  font-weight-bold" > <strong> Sign Out</strong></i>
</div>
</div>
</div>
<div className="col-md-10 " style={{backgroundColor:"grey"}}>

{state.AddAdmin && <Addadmin/>}
{state.Comitee && <Members/>}
{state.AddMember && <Addmember/>}
{state.OnudanValue && <OnudaanValue/>}

</div>
</div>
        </div>
    );
};

export default Admin;