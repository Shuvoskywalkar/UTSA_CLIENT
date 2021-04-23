import React, { useEffect } from 'react';
import '../CEO/CEO.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from "aos"
import 'aos/dist/aos.css'

const CEO = () => {
    // useEffect(()=>{
    //     Aos.init({duration:3000})
    // },[])
    return (
        <div  className="CEOcontainer">
            <div className="container ">
            <div className="row pb-5">
                <div className="col-md-5 col-sm-12 d-none d-md-block " data-aos="fade-right ">
                    <img src="https://www.linkpicture.com/q/5790-removebg.png" type="image" alt="mohonda" className="img-fluid "  />
                </div>
                <div className="col-md-7 col-sm-12 text-white py-5  CeoText" data-aos="fade-left ">
                  <h1 className="text-white">মহন রবিদাস</h1>
                  <h3 className="text-info mt-3">C.E.O & Founder</h3>
                  <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deleniti mollitia, <br/> laudantium molestias eligendi, temporibus  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dicta tempora ipsum vitae magnam expedita unde? Corrupti dolorum cons</small>
                        <h4 className="text-secondary">mohondaremail@gmail.com</h4><br/>
                        <button className="btn btn-dark text-info mb-5">Follow him on facebook<FontAwesomeIcon icon='facebook'/></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CEO;