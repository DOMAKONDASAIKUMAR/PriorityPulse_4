import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,NavLink, Container
} from "reactstrap";
import Profile from "../Images/Profile.png"
import "../css/Header.css"
// import profile from "../assets/images/Profile.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (
      <Container fluid className="pl-0 pr-0" style={{backgroundColor:"#2F303a"}}>
    <Navbar  expand="md" className="ml-5 mr-2 bar pr-0">
      <NavbarBrand className="prio mr-0 " style={{
    color:"white",
    fontWeight: 500,
    fontSize: 
    "34px"
  }}>Priority Pulse</NavbarBrand>
      <div onClick={toggle}  class="menu-btn navbar-toggler pl-0 pr-0"  data-toggle="collapse" data-target="#navbartoggler"><div class="menu-btn__burger "></div></div>
      <Collapse isOpen={isOpen} className="justify-content-end" navbar>
      <ul class="navbar-nav ">
        <li class="nav-item active " style={{
      
  }}><a href="" to="/home" class="nav-link kom " >Home</a></li>
        <li class="nav-item "><a href="" to="/Requests" class="nav-link " >Requests</a></li>
        <li class="nav-item "><a href="" to="/Driver Details" class="nav-link ">Driver Details</a></li>
        <li class="nav-item "><a href="" to="/logout" class="nav-link ">Logout</a></li>
                        <a href="" class="navbar-brand bom" style={{ paddingLeft: " 25px" }}><img src={Profile} class="sign" alt="" ></img></a>

                    </ul>
            
      </Collapse>
            </Navbar>
            
            </Container>
  );
};

export default Header;
