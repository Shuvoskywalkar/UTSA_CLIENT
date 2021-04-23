import React from 'react';
import { Link } from 'react-router-dom';
//  import {logo1} from  "../../../logo/logo1.jpg"
 
const Navbar = () => {
    return (
            <nav class="navbar navbar-expand-lg navbar-light  ">
  <a class="navbar-brand" href="#">
      <img src="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/117231889_3184136298301729_4114266108029891020_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=_x-AJEZXDd0AX8-nc_j&_nc_ht=scontent.fdac24-1.fna&oh=65a726a28884d5d447d97abb23d70764&oe=60A93BAE" alt="not loading" className="img-fluid rounded-circle" style={{width:'90px'}}/>
  </a>
  <button class="navbar-toggler bg-light text-danger font-weight-bold" type="button" data-toggle="collapse" data-target="#navbarNav"  >
    <span class="navbar-toggler-icon text-light"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto mx-3">
      <li class="nav-item  active font-weight-bold  mx-3">
        <a class="nav-link text-white" href="#headerContainer">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item  active font-weight-bold  mx-3">
       <Link to="/Onudaan"><a class="nav-link text-info" href="#">Donations<span class="sr-only">(current)</span></a>
       </Link></li>
      <li class="nav-item active font-weight-bold mx-3">
        <a class="nav-link text-warning" href="#AboutUs">About Us <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active font-weight-bold mx-3">
        <a class="nav-link text-primary" href="#OurTeam">Our Team <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active font-weight-bold mx-3">
        <a class="nav-link text-danger" href="#ContactUs">Contact Us <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active  ml-3">
      <Link to="/Afterlogin">
        <button className="btn btn-dark">
            Login
        </button> 
         </Link>
      </li>
    </ul>
  </div>
</nav>
    );
};

export default Navbar;