import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import '../OnudaanRecords/Record.css'
const Record = () => {
    
const[team,setTeam]=useState([])
const[deleted,setdeletd]=useState(false)
useEffect(()=>{
    console.log(deleted)
    fetch('https://utsa-official-server.herokuapp.com/GetInfoDonation')
    .then(res=>res.json())
    .then(data=>setTeam(data))
},[deleted])
// console.log(team)
    return (
        <section>
            
{team.length ==0 ?
      <div className="text-center d-flex align-self center justify-content-center">
      <img src="https://miro.medium.com/max/1158/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"/>
      </div> :
            <div class="table-users">
   <div class="header">অনুদানদাতাদের পরিচয়</div>
   
   <table  cellspacing="0">
      <tr className="font-weight-bold">
         <th className="font-weight-bold">Picture</th>
         <th className="font-weight-bold">Name</th>
         <th className="font-weight-bold" >Address</th>
         <th className="font-weight-bold"> University/Workplace</th>
         <th className="font-weight-bold" width="230">Amount</th>
      </tr>
      
{ team.map(onudandata=>
// console.log(onudandata.Pending)
onudandata.Pending==false  &&
<tr>
    
         <td><img className="imgg"  src={`data:image/png;base64,${onudandata.Donator.img}`}   alt="Donator img" /></td>
<td>{onudandata.FullName}</td>
<td>{onudandata.Bagaan}</td>
<td>{onudandata.University}</td>
         <td>{onudandata.Amount} (B.D.T) </td>
      </tr>

      
)}
   </table>
</div>}
</section>
    );
};

export default Record;