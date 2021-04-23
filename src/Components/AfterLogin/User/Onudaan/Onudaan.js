import React, { useContext, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser,faUserCog } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../../../../App';
const Onudaan = ({Data}) => {
//  alert('প্রিয় অনুদানদাতা,অনুদান দেবার পুরবে নিজের প্রফাইল সেইভ করে নিবেন,অলরেডি সেইভড থাকলে OK চাপুন ')
  const[Loggedin,setLoggedin]=useContext(Context)
  const{email}=Loggedin
  

  const[value,setvalue]=useState({})
  const [file,setfile]=useState(null)
  const [data,setdata]=useState({})
  
    const onchangehandler=(e)=>{
  
      const file=e.target.files[0]
      setfile(file)
    }
    
    const[pending,setpending]=useState(true)
  
    const[error,seterror]=useState(false)

  
      const onsubmit=(e)=>{
      e.preventDefault();
      console.log(value)
      

      const NameOfDonor2=document.getElementById('NameOfDonor').value
      const Bagaan2=document.getElementById('Bagaan').value
      const University2=document.getElementById('University').value
     const MobileNumber=document.getElementById('MobileNumber').value
     const Email=document.getElementById('Email').value
     const Amount=document.getElementById('Amount').value
     const Bkash=document.getElementById('Bkash').value
     const TransactionID=document.getElementById('TransactionID').value

    const formData = new FormData();
    formData.append('File',file)
    formData.append('FullName',NameOfDonor2)
    formData.append('University',University2)
    formData.append('Bagaan',Bagaan2)
    formData.append('Mobile',MobileNumber)
    formData.append('Email',Email)
    formData.append('Amount',Amount)
    formData.append('Bkash',Bkash)
    formData.append('TransactionID',TransactionID)
    formData.append('Pending',pending)

  
  
       fetch('https://utsa-official-server.herokuapp.com/Donation',{
        method:'POST',
        body:formData
      })
      .then(res=>res.json())
      .then(data=>{setdata(data)
      setstate(false)
    seterror(false)})
      .catch(err=>{setstate(false)
      seterror(true)})
    }
    const[state,setstate]=useState(false)
    const onstate=()=>{
  setstate(true)
    }
    return (
        <div className="OnudanContainer ">
    <div class="BioContainer"  >
    <div>
        <div className="method mt-4 mb-4 pl-5 pr-5 ">
    <p style={{fontFamily:"revert",fontSize:"33px"}} className="text-center danger font-wight-bold">our official Bkash account no: <span className="text-white">0171212020</span></p> 
    <br/>
  <b style={{fontFamily:"cursive"}}>অনুদানদাতাকে প্রথমে তার বিকাশ একাউন্ট থেকে উক্ত নাম্বারটিতে টাকা পাঠিয়ে প্রাপ্ত Transaction ID এবং উনার একাউন্ট নাম্বারটি আমাদের জানাতে হবে,যা দিয়ে আমরা সত্যতা যাচাই করে প্রদানকারীর তথ্য প্রদশ্রন করতে পারি আমাদের facebook এবং Web পেইজে</b> 
        </div>
{state && <div class="text-center text-dark mt-5" >
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  </div>}
  {error && <h4 className="text-danger font-weight-bold text-center">Error Alert,,Please Insert a Photo</h4>}

        {data.result && <h4 className="text-warning font-weight-bold text-center">ডাটা পাঠান হয়েছে সাকসেসফুলি</h4>}

  <form className="d-flex pl-5 pt-5 pr-5 pb-3" onSubmit={onsubmit} >
      
      <div className="col-md-5">
      
{!file?<div class="form-group  ">
    <input type="file" onChange={onchangehandler} name="userImage" className="userImage" id="userImage" style={{display:"none"}}/>
        <label class="FileLabel  " aria-describedby="Please Insert a Profile Type Photo of Your"  htmlFor="userImage">
          <FontAwesomeIcon icon={faUser}/>
          
          </label>
          
    </div>:
    <div class="form-group  ">
      <label for="file" class="fileLabel" aria-describedby="Please Insert a Profile Type Photo of Your" style={{height:"175px",width:"200px",fontSize:"15px"}}>
    <b className=" text-light">{file.name}</b>
    {/* {console.log(file)} */}
  </label>
    <input onChange={onchangehandler} class="fileInput w-100" id="file" type="file" name="Picture" style={{display:'none'}}/>
    </div>}
    {/* </div>} */}

    {Data.length>0 ?
    <div class="form-group mt-2">
    <input type="text"   class="form-control"  defaultValue={Data[0].FullName} placeholder="আপনার পুর নাম" name="NameOfDonor" id="NameOfDonor"/>
    </div>:
    <div class="form-group pt-5">
    <input type="text"  class="form-control"  placeholder="আপনার পুর নাম" name="NameOfDonor" id="NameOfDonor"/>
    </div>}
    
    <div class="form-group ">
      <input    class="form-control" id="Amount" placeholder="অনুদানের পরিমাণ" name="Amount"/>
    </div>
    
    <div class="form-group ">
      <input   class="form-control" id="TransactionID" placeholder="Transaction ID" name="TransactionID"/>
    </div>

    </div>
    <div className="col-md-6">
    {Data.length>0 ?
    
    <div class="form-group ">
      <input  class="form-control" id="Bagaan"   defaultValue={Data[0].Bagaan} placeholder="বাগানের নাম" name="Bagaan"/>
      </div>
    :
    <div class="form-group ">
      <input   class="form-control" id="Bagaan" placeholder="বাগানের নাম" name="Bagaan"/>
      </div>}
      {Data.length>0 ?<div class="form-group ">
      <input type="text" class="form-control"  id="University" placeholder="বিশববিদ্যালয়ের নাম" defaultValue={Data[0].University} name="University"/>
    </div>:<div class="form-group ">
      <input type="text" class="form-control"  id="University" placeholder="বিশববিদ্যালয়ের নাম" name="University"/>
    </div>}

    <div class="form-group ">
      <input type="number" class="form-control"  id="Bkash" placeholder="Bkash account number" name="Bkash"/>
    </div>
   <div class="form-group ">
   <input type="email" class="form-control"  id="Email" defaultValue={email} placeholder="ইমেইল আইডি" name="Email"/>
 </div>
    <div class="form-group ">
      <input type="Number" class="form-control"   id="MobileNumber" placeholder="Current Mobile Number" name="MobileNumber"/>
    </div>
    <div className="text-center" style={{marginLeft:"-250px"}}>
    <button type="submit" onClick={onstate}  class="btn btn-dark pl-4 pr-4 py-2  mr-5 text-center  text-white SaveButton" style={{marginTop:""}}>Submit</button></div>
</div>


    
    
  </form>
</div>
</div>
</div>

    );
};

export default Onudaan;