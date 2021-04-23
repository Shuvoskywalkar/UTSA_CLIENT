import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../App';
import AboutUS from './AboutUs/AboutUS';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navbar from './Header/Navbar/Navbar';
import OurTeam from './OurTeam/OurTeam';
import Progressbar from './Progressbar/Progressbar';
import '../Homepage/Homepage.css'
const Homepage = () => {
    const [Participate,setParticipate]=useContext(Context)
// console.log(props)
    const [hope,sethope]=useState(false)
    const ongshogrohon=()=>{
        sethope(!hope)
        const bot={...Participate}
        bot.BotPopup=(!hope)
        setParticipate(bot)

    }

    return (
        <div className="Homepage ">
        <div class="mediaQ" style={{padding:"0px", clipPath: "ellipse(100% 55% at 48% 44%)",backgroundColor:"#111430"}}>
        <div id="headerContainer" className="mx-5 pb-4" >
            
           <Navbar/>
           <div className="row ">
               <div className="col-md-6" >
                   <h1 className="mt-5" style={{ 
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: "60px",
    lineHeight: "80px",
    
    letterSpacing: "0.01em",
    
    color: 'purple'
    
    }}>Wellcome to our <br/> <span className="text-light">U.<span className="text-success">T</span>.S.A</span> family</h1>
                   <h5 className="text-warning mt-4">Well,We are an Non-Profitable-Organization,We work for the betterment of our peoples which is totally non-political...</h5>
                   <div className="d-flex mt-5 ">

                   <Link to="/Afterlogin">
              <div className="btn btn-warning text-dark "> <strong>অনুদানে ইচ্ছুক?</strong></div>               </Link>

              <Link to="/Afterlogin">

               <div onClick={ongshogrohon} className="btn btn-danger text-light  ml-5"><strong>অংশগ্রহনে ইচ্ছুক?</strong></div>                 </Link>
            
               </div>
               </div>
               <div className="col-md-6 ">
                   <img src="https://i.ibb.co/Jyt3WnH/79987329-stock-vector-a-woman-in-traditional-clothes-collects-tea-leaves-on-a-a-tea-plantation-field.png" alt="tea Workers image should be here" className="w-100  " style={{height:"450px"}}/>
               </div>
           </div>
        </div>
        </div>
         <div id="AboutUs">
            <AboutUS/>
        </div>
         <div id="OurTeam">
            <OurTeam/>
        </div>
 <div id="ContactUs">
            <Footer/>
        </div>   
        </div>
    );
};

export default Homepage;