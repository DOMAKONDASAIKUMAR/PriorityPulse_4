import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import map from "../Images/maps.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../css/Section.css"
import Media from "react-media"
import { faCircle, faHospital } from '@fortawesome/free-solid-svg-icons'

function Section() {
    const maps = {
        width: "100%",
        height: "75vh",
        overflow: "hidden"
    }
    const tb = {
        position: "absolute", right: "12%", paddingTop: "2%", fontWeight: "500",
        fontSize: "1.3rem", padding: "5px", border: "0"
        
    }
    const [Hospital, setHospital] = useState({
        name: "Trama center",
        place: "Banaras hindu university,varanasi,UP",
        number: "7032629788",
        address:`Banaras hindu university,varanasi, \n UP,221005`
        
    })
    const [Driver, setDriver] = useState({
        name: "Rajesh Devarkonda",
        contact:"7032629788"
    })
    const [Patient, setPatient] = useState({
        name: "Rajini Devarkonda",
        Age: 45,
        Contact: 9810865655,
        Address: "Banaras hindu University,varanasi,\nUP,21005",
        priority: 5,
        Case: "Heart attack",
        Details: "Heartattack,\nunconscious",
        Route:"Hyderabad Gate - Vt temple - sunderlal hospital - lanka gate - trama center"
    })
    const [ar, Setar] = useState(['Trama Center', 'Sunderlal', 'Sunderlal', 'Trama Center', 'Sunderlal', 'Trama center'])
    const [pn, Setpn] = useState(['Rajini', 'Nithish', 'Sudeep', 'Saikiran', 'Harish', 'Verma'])

    const tr = {
        fontWeight:"500",
        fontSize:"1.3rem",padding:"5px",border:"0"
    }
    const im = {
        color:"#E89F9F"
    }
    return (
        <div style={{backgroundColor:"#2F303a"}}>
            <Container fluid className=" " >
                <Row className=" ml-4 mr-3 pt-5">
                    <Col lg={7} xs={12} className=""><img src={map} style={maps}></img></Col>
                    <Col lg={5} xs={12} className="det pt-4 px-md-4">
                    
                       <h4 style={{ color: "#A6BFDD", display: "inline" }} className=""><Media query={{ maxWidth: 599 }}>
          {matches =>
            matches ? (
                                    <span>Active<br/>Rides</span>
            ) : (
              `Active Rides`
            )
          }
        </Media> <span style={{ position: "absolute", right: "9%" }}> 
                        <Media query={{ maxWidth: 599 }}>
          {matches =>
            matches ? (
                <span style={{position:"absolute",bottom:"-27px",right:"20px"}}>Hospital<br/>Name</span>
            ) : (
              `Hospital Name`
            )
          }
        </Media>
        </span></h4>
         <table className="table table-striped table-lg mt-3">
             <tbody >
        <tr className="bg-success " style={{paddingTop:"0",position:"relative"}} ><td style={tr} className="">Rajini
                                        </td><span style={tb} >{ar[0]}</span></tr>
                                        <tr style={{color:"white",position:""}}><td style={tr}>{pn[0]} </td><span style={tb} >{ar[1]}</span></tr>
                                        <tr  style={{backgroundColor:"#EAF0F1"}}><td style={tr}>{pn[1]} </td><span style={tb} >{ar[2]}</span></tr>
                                        <tr style={{color:"white"}} ><td style={tr}>{pn[2]} </td><span style={tb} >{ar[3]}</span></tr>
                                        <tr style={{backgroundColor: "#EAF0F1"}}><td style={tr}>{pn[3]} </td><span style={tb} >{ar[4]}</span></tr>
                                        <tr style={{color:"white"}} className="d-flex"><td style={tr}>{pn[4]}</td><span style={tb} >{ar[5]}</span> </tr>
                                    </tbody>
                                   
                            </table>
                          
                    </Col>
                </Row>
                <Row className=" ml-4 mr-3 mb-5 mt-5" style={{color:"white",paddingBottom:"13vh",paddingTop:"8vh"}}>
                    <Col xs={12} md={6} xl={3} className='px-3 py-4 pr-5'>
                        <div >
                            <h4 style={{color:"#A6BFDD"}} className="pb-2">Hospital Details</h4>
                            <h2>{Hospital.name}</h2>
                            <h6>{Hospital.place}</h6>
                            <div className="d-flex " >
                                <h5>Contact </h5>
                                <h5 className="pr-4 pl-2">:</h5>
                                <h5>{Hospital.number}</h5>
                            </div>
                            <div className="d-flex " >
                                <h5>Address  </h5>
                                <h5 className="pr-4 pl-2"> :</h5>
                                <h5>{Hospital.address}</h5>
                        </div>
                            
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={3} className="py-4 px-4">
                    <div>
                            <h4 style={{color:"#A6BFDD"}} className="pb-2">Driver Details</h4>
                            <h2>{Driver.name}</h2>
                            <div className="d-flex " >
                                <h5>Contact </h5>
                                <h5 className="pr-4 pl-2">:</h5>
                                <h5>{Driver.contact}</h5>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12}  xl={6} className="pl-3 py-4" >
                    <h4 style={{color:"#A6BFDD"}} className="pb-2">Patient Details</h4>
                        <h2>{Patient.name}</h2>
                        <Row>
                            <Col xs={12} md={6}>
                            <div className="d-flex " >
                                <h5 style={im}> Age </h5>
                                <h5 className="pr-4 pl-5">:</h5>
                                    <h5>{Patient.Age}</h5>
                                </div>
                                <div className="d-flex " >
                                <h5>Contact  </h5>
                                <h5 className="pr-4 pl-2"> :</h5>
                                    <h5>{Patient.Contact}</h5>
                                </div>
                                <div className="d-flex " >
                                <h5>Address  </h5>
                                <h5 className="pr-4 pl-2"> :</h5>
                                <h5>{Patient.Address}</h5>
                        </div>
                            </Col>
                            <Col xs={12} md={6} className="pt-4"  >
                            <div className="d-flex " >
                                <h5 > Priority Level </h5>
                                <h5 className="pr-3 pl-3">:</h5>
                                    <h5 style={im}>{Patient.priority}</h5>
                                </div>
                                <div className="d-flex " >
                                <h5  className="pr-5">Case  </h5>
                                <h5 className="pl-5 pr-2"> :</h5>
                                    <h3 style={{ verticalAlign: "center", color: "#E89F9F" }}>{Patient.Case}</h3>
                                </div>
                                <div className="d-flex  " >
                                <h5 style={{}} className="pr-4">Details  </h5>
                                <h5 className="pl-5 pr-2"> :</h5>
                                    <h5 style={im}>{Patient.Details}</h5>
                        </div>
                            </Col>
                        </Row>
                        <div className="d-flex pt-5" >
                                <h5 className="">Route  </h5>
                                <h5 className="pl-4 pr-3"> :</h5>
                            <h5>{Patient.Route}</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section
