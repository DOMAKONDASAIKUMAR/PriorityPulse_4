import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { Route, Redirect, Switch } from "react-router-dom";

import Foot from './Components/Foot'
import Profile from "./Components/Profile";
import Home from './Components/Home'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,} from '@fortawesome/free-brands-svg-icons'
library.add(fab )
class App extends Component {
  render() {
    return (
      <>
            <main style={{
          minHeight:"100vh",
          display: "flex",
          flexDirection: "column",
      
        }}>
          
          <Switch>
         
            <Route path="/Profile" component={Profile} /> 
            
             <Route path="/Home" component={Home} />  
            <Redirect to="/Profile" />
          </Switch> 
         
          <Foot></Foot>
       
            </main>
            
      </>
    );
  }
}

export default App;

