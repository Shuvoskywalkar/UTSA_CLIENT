import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faCoffee,faPlus,faUserCog, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Addmember = () => {
  const [value,setValue]=useState({})
  const [file,setfile]=useState(null)
  const [data,setdata]=useState({})
 const blurHandler=(e)=>{
const VALUE={...value}
VALUE[e.target.name]=e.target.value
setValue(VALUE)

  }
  const onchangeHandler=(e)=>{
    const file=e.target.files[0]
    console.log(file)
    setfile(file)
}
const{FullName,phone,Position,University,Bagaan}=value
const[error,seterror]=useState(false)

const  submitHandler=(e)=>{
  e.preventDefault()
  // console.log(value)
   const formdata=new FormData()
   formdata.append('file',file)
   formdata.append('FullName',FullName)
   formdata.append('Phone',phone)
   formdata.append('Position',Position)
   formdata.append('University',University)
   formdata.append('Bagaan',Bagaan)
   
    fetch('https://utsa-official-server.herokuapp.com/addMember',{
      method:'POST',
    body:formdata
    })
    .then(res=>res.json())
    .then(data=>{setdata(data)
    setstate(!state)
  console.log(data)})
    .catch(err=>{console.log(err)
    setstate(!state)
  seterror(!error)})

  }
  console.log(data)
  const[state,setstate]=useState(false)
  const onstate=()=>{
setstate(!state)
  }
    return (
        <div>
<form class="well form-horizontal  mx-3" onSubmit={submitHandler}  method="post"  id="contact_form" style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
<fieldset>
<div className="">
  {!data.result && state && <div class="text-center text-light mt-5" >
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>}

{error && !data.result && <h4 style={{fontWeight:"25px"}} className="text-danger font-weight-bold text-center p-3 mt-2">An Error Ocurred,Retry</h4>}

{data.result && <h4 style={{fontWeight:"25px"}} className="text-dark font-weight-bold text-center p-3 mt-5">ডাটা পাঠান হয়েছে সাকসেসফুলি</h4>}
{}
{file ?<div class="file" >
<label for="file" class="fileLabel2">
    <b>{file.name}</b>
  </label>
    <input onChange={onchangeHandler} class="fileInput w-100" id="file" type="file" name="Picture" style={{display:'none'}}/>
   
</div>
:<div class="file" >
<label for="file" class="fileLabel  ">
<FontAwesomeIcon icon={faCamera}/>

  </label>
    <input onChange={onchangeHandler} class="fileInput w-100" id="file" type="file" name="Picture" style={{display:"none"}}/>
   
</div>
}
        <hr/>
    </div>

<div class="form-group">
  <div class=" inputGroupContainer">
  <label class=" control-label">Full Name</label>  
  <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input onBlur={blurHandler}  name="FullName" placeholder="Full Name" class="form-control"  type="text"/>
    </div>
  </div>
</div>


<div class="form-group">
    <div class=" inputGroupContainer">
    <label class=" control-label" >Mobile number</label> 
    <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input onBlur={blurHandler} name="phone" placeholder="Mobile Number" class="form-control"  type="text"/>
    </div>
  </div>
</div>

  <div class="form-group"> 
    <div class=" selectContainer">
    <label className="control-label">Position in the Team:</label>
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
    <select onBlur={blurHandler} name="Position" class="form-control selectpicker">
      <option value="">Select His/Her Position</option>
      <option>Department of Engineering</option>
      <option>Department of Agriculture</option>
      <option >Accounting Office</option>
      <option >Tresurer's Office</option>

    </select>
  </div>
</div>
</div>
  

<div class="form-group">
  <div class=" inputGroupContainer">
  <label class=" control-label">University</label>  
  <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input onBlur={blurHandler}  name="University" placeholder="বিশবিদ্যাল্যয়ের নাম" class="form-control"  type="text"/>
    </div>
  </div>
</div>


       <div class="form-group">
    <div class=" inputGroupContainer">
    <label class=" control-label">Address</label>  
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
  <input onBlur={blurHandler} name="Bagaan" placeholder="বাগানের নাম" class="form-control"  type="text"/>
    </div>
    </div>
  </div>

<br/>
<div class="form-group">
    <button type="submit" class="btn btn-warning" onClick={onstate} >SUBMIT <span class="glyphicon glyphicon-send"></span></button>
</div>
</fieldset>
</form>
</div>
    );
};

export default Addmember;