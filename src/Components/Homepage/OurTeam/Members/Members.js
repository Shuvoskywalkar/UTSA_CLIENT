import React, { useEffect, useState } from 'react';
import '../Members/Members.css';
import Image from 'react-bootstrap/Image';
import Aos from 'aos'
import 'aos/dist/aos.css'
import UpdateForm from './Modal/Modal';
import context from 'react-bootstrap/esm/AccordionContext';
import { useContext } from 'react';
import { Context } from '../../../../App';

const Members = () => {
    const[Loggedin,setLoggedin]=useContext(Context)
    console.log(Loggedin)

    const[team,setTeam]=useState([])
    useEffect(()=>{
        fetch(' https://utsa-official-server.herokuapp.com/getTeamMembers')
        .then(res=>res.json())
        .then(data=>setTeam(data))
    },[])
    // console.log(team)
    
useEffect(()=>{
    Aos.init({duration:2000});
},[])


const[Team,setteam]=useState([])

const [show, setShow] = useState(false);
const [teammember,setteammember]=useState({})
const handleClose = () => setShow(false);

    
const handleShow = (tmmem) =>{
    
    // useEffect(()=>{
        // fetch(`http://localhost:1000/getTemMember/${tmmem._id}`)
        // .then(res=>res.json())
        // .then(data=>setteam(data[0].Image))
    // },[team])
    // console.log(Team)
    if (Loggedin.isAdmin==true) {

        setShow(true);setteammember(tmmem)}

    }


    return (
        <div className="MembersContainer">
            <h2 className="text-center mb-5" style={{color:"#2D2D2D"}}>Our <span style={{color:"#7AB259"}}>Respected</span> Team</h2>
            {team.length==0 && 
    <div class="d-flex justify-content-center">
<img src="https://www.parcon-india.com/m/images/giphy.gif" alt="Loading.....Please Wait" style={{width: "9rem", height: "9rem"}}/>
</div>  }
<div className="row  ml-5 mr-5 " >

                       {team.map(teamMember=>
                        <div data-aos="fade-up" onClick={()=>handleShow(teamMember)} className="col-md-4 col-sm-12 text-center px-3 py-2 TeamCard my-5 "  >
                            <div className="" >
                            
                            <Image className="text-center circleImage   "  
                          src={`data:image/png;base64,${teamMember.Image.img}`}  />
                            <div className="my-2 mt-2">
                       <h4  className="text-dark">{teamMember.FullName}</h4>
                       <h5 className="text-info"  >{teamMember.Position}</h5>
                       </div>
                       </div>
                       
                       <p className="text-secondary">
                           <span className="text-dark font-weight-bold">Phone:</span> {teamMember.Phone},<span className="font-weight-bold text-dark">University:</span> {teamMember.University},<span className="font-weight-bold text-dark">Address:</span> {teamMember.Bagaan}</p>
                            </div>
                            
                        )}
           
      
                     <UpdateForm show={show}   teammember={teammember} handleClose={handleClose} />

       
                </div>
        </div>
    );
};

export default Members;