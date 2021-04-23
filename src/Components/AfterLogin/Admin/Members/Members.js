import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';

const Members = () => {



const[team,setTeam]=useState([])
const[deleted,setdeletd]=useState(false)
useEffect(()=>{
    console.log(deleted)
    fetch('https://utsa-official-server.herokuapp.com/getTeamMembers')
    .then(res=>res.json())
    .then(data=>setTeam(data))
},[deleted])
console.log(team)


const remove=(id)=>{
    setdeletd(false)
    console.log(id)
    fetch(`https://utsa-official-server.herokuapp.com/RemoveMember/${id}`,{
         method:'DELETE'
    })
    .then(res=>res.json())
    .then(result=>{
        console.log(result)
        setdeletd(!deleted)
    })
}
    return (
        <div className="row my-3 pl-4 pr-4 ">
               {team.length==0 && 
    <div class="d-flex justify-content-center">
<img src="https://www.honesttea.com/content/dam/honesttea/sip-scan/honest-sipscan-loading.gif" alt="Loading.....Please Wait" style={{width: "9rem", height: "9rem"}}/>
</div>  }
{
team.map(teamMember=>
                        <div  className="col-md-4 col-sm-12 col-12 text-center py-2  AdminTeam" >
                                
                            <Image className="text-center circleImage   "  
                          src={`data:image/png;base64,${teamMember.Image.img}`}  />
                      <div className="my-2 mt-2">
                       <h4  className="text-dark">{teamMember.FullName}</h4>
                       <h5 className="text-info font-weight-bold"  >{teamMember.Position}</h5>
                       </div>
                       
                       <p className=" font-weight-bold" style={{color:"lightgoldenrodyellow"}}>
                           {teamMember.Phone} <br/>
                       {teamMember.University}<br/>
                       {teamMember.Bagaan}<br/>
                      </p>  
                      <button onClick={()=>remove(teamMember._id)} className="btn btn-danger text-warning ">Remove</button>
                            </div>
                        )
                        }
  
</div>

    );
};

export default Members;