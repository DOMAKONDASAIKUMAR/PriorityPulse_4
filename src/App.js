import React, { Component } from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Components/Home"
import Head from "./Components/Header"
import Working from './Components/Working'
import Section from './Components/Section'
import Foot from './Components/Foot'
class App extends Component {
  render() {
    return (
      <>
            <main style={{
          minHeight:"100vh",
          display: "flex",
          flexDirection: "column",
        backgroundColor:"#fdfdfd"
        }}>
           <Head></Head>
          <Switch>
         
            <Route path="/home" component={Home} /> 
             {/* <Route path="/activeRides" component={ActiveRides} />
            <Route path="/profile" component={Profile} />  */}
            <Redirect to="/home" />
          </Switch> 
          <Foot></Foot>
         
       
            </main>
            
      </>
    );
  }
}

export default App;

