import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faCoffee,faPlus,faUserCog, faUserShield } from '@fortawesome/free-solid-svg-icons'

const Addadmin = () => {
  const [adminEmail,addadminEmail]=useState([])
const blurrHandler=(e)=>{
  // const Adminemail=document.getElementById('AdminID').value
const adminEmailID={...adminEmail}
adminEmailID[e.target.name]=e.target.value
addadminEmail(adminEmailID)
}
// console.log(adminEmail)
const[send,setsend]=useState(false)
const addHandler=()=>{
  
  fetch('https://utsa-official-server.herokuapp.com/addAdmin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(adminEmail)
})
  .then(result=>{console.log(result)
  setsend(true)})
  .catch(err=>console.log(err))
}
    return (   
      <div className="" style={{height:"100%"}}>   
<div class="form-group col-md-6">
  <div class=" inputGroupContainer  justify-content-center" >
  {/* <label class=" control-label">Enter The Admin Email</label>   */}
  <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input   placeholder="Enter the new Admin Email ID" class="form-control" id="AdminID" name="email" onBlur={blurrHandler} type="text"/>
    </div>
    {/* <br/> */}
  <div  className="btn-dark text-success text-center  py-2 "  onClick={addHandler}>
      <span>
      <FontAwesomeIcon icon={faPlus}/> Add</span>
      </div>
      {send && <h4 style={{fontWeight:"25px"}} className="text-dark font-weight-bold text-center  mt-5">ডাটা পাঠান হয়েছে সাকসেসফুলি</h4>}

  </div>
  </div> 
</div>
        
    );
};

export default Addadmin;