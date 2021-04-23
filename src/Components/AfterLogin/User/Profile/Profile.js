import React, { useContext, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser,faUserCog,faCamera } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Context } from '../../../../App';
const Profile = ({Data}) => {
  const[Loggedin,setLoggedin]=useContext(Context)
  const{email}=Loggedin
// useEffect(()=>{

//   fetch(`http://localhost:1000/getTheUserProfile?Email=${email}`)
//      .then(res=>res.json())
//      .then(result=>{
//     setData(result)
//     console.log(result)
//   })

// },[])

const[value,setvalue]=useState({})
const [file,setfile]=useState(null)
const [data,setdata]=useState({})
const[change,setchange]=useState(false)

  const onchangehandler=(e)=>{

    const file=e.target.files[0]
    setfile(file)
  }
  const onchangehandler2=(e)=>{

    const file=e.target.files[0]
    setfile(file)
    setchange(true)
  }
  const[error,seterror]=useState(false)

    function  onsubmit(e){
    e.preventDefault()
    const FullName=document.getElementById('FullName').value
    const University=document.getElementById('University').value
    const UserMobile=document.getElementById('UserMobile').value
    const UserEmail=document.getElementById('UserEmail').value
    const Bagaan=document.getElementById('Bagaan').value
    const Gender=document.getElementById('Gender').value

  const formData = new FormData();
  formData.append('File',file)
  formData.append('FullName',FullName)
  formData.append('University',University)
  formData.append('Bagaan',Bagaan)
  formData.append('Mobile',UserMobile)
  formData.append('Email',UserEmail)
  formData.append('Gender',Gender)
console.log(formData)

     fetch('https://utsa-official-server.herokuapp.com/SaveProfileUser',{
      method:'POST',
      body:formData
    })
    .then(res=>res.json())
    .then(data=>{setdata(data);sessionStorage(data)
      setstate(false)
      seterror(false)})

    .catch(err=>{setstate(false)
      seterror(true)})
    
  }
console.log(Data)

const[state,setstate]=useState(false)
const onstate=()=>{
setstate(true)
}
    return (
      
           <div class="BioContainer" >
             
    <div>

    {data.result && <h4 className="text-light mt-4 font-weight-bold text-center">ডাটা পাঠান হয়েছে সাকসেসফুলি</h4>}


    {state && <div class="text-center text-dark mt-5" >
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  </div>}
  {error && <h4 className="text-danger font-weight-bold mt-4 text-center">Error Alert,,Please Insert a Photo</h4>}

<form className="d-flex pl-5  pr-5 pb-3" onSubmit={onsubmit}>

            <div className="col-md-5 pt-4">
      



      
{Data.length>0  ?
<div>
{!file?
<div class="form-group  ">
<input type="file" onChange={onchangehandler2} name="userImage" className="userImage" id="userImage" style={{display:"none"}}/>
<label    htmlFor="userImage">
<img src={`data:image/png;base64,${Data[0].UserProfilePic.img}`} alt="UserProfilePicNotAvailavle" className="imageUser img-fluid "  />
</label>
    </div>:
    <div class="form-group  ">
    <label for="file" class="fileLabel" style={{height:"175px",width:"200px",fontSize:"15px"}}>
  <b className=" text-light">{file.name}</b>
  {/* {console.log(file)} */}
</label>
  <input onChange={onchangehandler} class="fileInput w-100" id="file" type="file" name="Picture" style={{display:'none'}}/>
  </div>
    }
    </div>
    : <div>
{!file?<div class="form-group  ">
    <input type="file" onChange={onchangehandler} name="userImage" className="userImage" id="userImage" style={{display:"none"}}/>
        <label class="FileLabel  " htmlFor="userImage"><FontAwesomeIcon icon={faUser}/></label>
    </div>:
    <div class="form-group  ">
      <label for="file" class="fileLabel" style={{height:"175px",width:"200px",fontSize:"15px"}}>
    <b className=" text-light">{file.name}</b>
    {/* {console.log(file)} */}
  </label>
    <input onChange={onchangehandler} class="fileInput w-100" id="file" type="file" name="Picture" style={{display:'none'}}/>
    </div>}</div>
    }
    {Data.length>0?
    
    <div class="form-group ">
    <input   class="form-control" id="FullName" defaultValue={Data[0].FullName} placeholder="আপনার পুর নাম" name="FullName"/>
    </div>:
    <div class="form-group ">
    <input   class="form-control" id="FullName" placeholder="আপনার পুর নাম" name="FullName"/>
    </div>}
    <div className="de-felx justify-content-center align-items-center">    {Data.length>0?
        <button type="submit"  class="btn btn-secondary text-warning SaveButton">Update</button>
    :
        <button type="submit" onClick={onstate} class="btn btn-dark SaveButton">Save</button>
    }
    </div>

</div>
    
    <div className="col-md-6 pt-5">
      {Data.length>0?
      <div class="form-group ">
      <input  defaultValue={Data[0].Bagaan} class="form-control" id="Bagaan" placeholder="বাগানের নাম" name="Bagaan"/>
      </div>
      :
    <div class="form-group ">
      <input   class="form-control" id="Bagaan" placeholder="বাগানের নাম" name="Bagaan"/>
      </div>}
      {Data.length>0?
      <div class="form-group ">
      <input type="text" defaultValue={Data[0].University } class="form-control" id="University" placeholder="বিশববিদ্যালয়ের নাম" name="University"/>
    </div>
      :
    <div class="form-group ">
      <input type="text"  class="form-control" id="University" placeholder="বিশববিদ্যালয়ের নাম" name="University"/>
    </div>}
    {Data.length>0?
    <div class="form-group ">
      <input type="number"  class="form-control" id="UserMobile" defaultValue={Data[0].Mobile} placeholder="মবাইল নং" name="UserMobile"/>
    </div>
    :<div class="form-group ">
      <input type="number" class="form-control" id="UserMobile" placeholder="মবাইল নং" name="UserMobile"/>
    </div>}
    
<div class="form-group ">
      <input type="email"  class="form-control"  id="UserEmail" placeholder="ইমেইল আইডি" defaultValue={email} name="UserEmail"/>
    </div>
    

{Data.length>0?

<div class="form-group "> 
<div class="selectContainer">
<div class="input-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
<select name="Gender" id="Gender"   class="form-control selectpicker">
<option name="Gender"  defaultValue={Data[0].Gender} selected>{Data[0].Gender}</option>
  <option name="Gender"  value="পুরুষ" >পুরুষ</option>
  <option name="Gender" value="নারী">নারী</option>
  <option name="Gender" value="উভলিঙ্গ">উভলিঙ্গ</option>
</select>
</div>
</div>
</div>
:
  <div class="form-group "> 
    <div class="selectContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
    <select name="Gender" id="Gender"   class="form-control selectpicker">
    <option name="Gender"  value="no Gender Selected" >No Gender Selected</option>
      <option name="Gender"  value="পুরুষ" >পুরুষ</option>
      <option name="Gender" value="নারী">নারী</option>
      <option name="Gender" value="উভলিঙ্গ">উভলিঙ্গ</option>
    </select>
  </div>
</div>
</div>}
    
</div>


    
   
  </form>

</div>
</div>
 
        
    );
};

export default Profile;