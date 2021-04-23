import { faCamera, faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';

import { Button, Image, Modal } from 'react-bootstrap';
import context from 'react-bootstrap/esm/AccordionContext';

const UpdateForm = ({show,handleClose,teammember}) => {
  // console.log(Image)


// console.log(teammember)
    const [file,setfile]=useState(null)
    const [data,setdata]=useState({})
   
    const onchangeHandler=(e)=>{
      const file=e.target.files[0]
      // console.log(file)
      setfile(file)
  }
  const  submitHandler=(e)=>{
    e.preventDefault()
    

const FullName=document.getElementById('FullName').value
const MobNum=document.getElementById('MobNum').value
const Position=document.getElementById('Position').value
const University=document.getElementById('University').value
const Bagaan=document.getElementById('Bagaan').value

const formData = new FormData();

formData.append('file',file)
formData.append('FullName',FullName) 
formData.append('MobNum',MobNum)
formData.append('Position',Position)
formData.append('University',University)
formData.append('Bagaan',Bagaan)
// console.log(file)
// const examples={FullName,MobNum,Position,University,Bagaan}
// console.log(examples)
const {_id}=teammember

    fetch(`https://utsa-official-server.herokuapp.com/UpdateMember/${_id}`,{
    method:'PATCH' ,
    // headers:{'Content-Type':'application/json'},
    body:formData
    })
    .then(res=>res.json())
    .then(data=>{
     setdata(data.modifiedCount)
      // console.log(data)
      setstate(false)

    })}
    const[state,setstate]=useState(false)
  const onstate=()=>{
setstate(true)
  }
        return (
        
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-success">Update The Informations here</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form class="well form-horizontal my-1 mx-3" onSubmit={submitHandler}  method="post"  id="contact_form" style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
<fieldset>
<div className="">
{data==1 && <b className="text-dark font-weight-bold text-center">ডাটা পাঠান হয়েছে সাকসেসফুলি,Refressh the page to see changes</b>}
{state && <div class="text-center text-primary mt-5" >
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  </div>}


{file ?<div class="file" >
<label for="file" class="fileLabel2">
    <b>{file.name}</b>
  </label>
    <input onChange={onchangeHandler} class="fileInput w-100" id="file" type="file" name="Picture" style={{display:'none'}}/>

</div>
:<div class="file" >
<label for="file"  >
  {teammember.Image ?<img src={`data:image/png;base64,${teammember.Image.img}`} className="img-fluid" alt="Server Error" /> 
:<FontAwesomeIcon icon={faCamera}/> }
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
  <input   name="FullName" placeholder="Full Name" class="form-control" defaultValue={teammember.FullName} id="FullName" type="text"/>
    </div>
  </div>
</div>


<div class="form-group">
    <div class=" inputGroupContainer">
    <label class=" control-label" >Mobile number</label> 
    <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input id="MobNum" name="phone" placeholder="Mobile Number" defaultValue={teammember.Phone} class="form-control"  type="text"/>
    </div>
  </div>
</div>

  <div class="form-group"> 
    <div class=" selectContainer">
    <label className="control-label">Position in the Team:</label>
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
    <select defaultValue={teammember.Position} name="Position" id="Position" class="form-control selectpicker">
      <option value="">Select His/Her Position</option>
      <option Value={teammember.Position}>{teammember.Position}</option>
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
  <input defaultValue={teammember.University}  name="University" placeholder="বিশবিদ্যাল্যয়ের নাম" class="form-control" id="University" type="text"/>
    </div>
  </div>
</div>


       <div class="form-group">
    <div class=" inputGroupContainer">
    <label class=" control-label">Address</label>  
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
  <input id="Bagaan" defaultValue={teammember.Bagaan} name="Bagaan" placeholder="বাগানের নাম" class="form-control"  type="text"/>
    </div>
    </div>
  </div>


<div class="form-group">
  <label class=" control-label"></label>
  <div class=""><br/>
    <button type="submit" onClick={onstate} class="btn btn-warning px-4 py-2 font-weight-bold " > SUBMIT <span class="glyphicon glyphicon-send"></span></button>
  </div>
</div>
<div className="form-group">
    
</div>
</fieldset>
</form>

        
      </Modal.Body>
      <Modal.Footer>
        <Button className="text-center " variant="dark" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    );
};

export default UpdateForm;