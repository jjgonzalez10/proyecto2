import React, { Component } from 'react';
/*import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'*/
  

class Resultado extends Component {
  
    render() {
      return (
        
        <div>
          {/* NAVIGATION */}
          <nav className="light-blue darken-4">
            <div className="container">
              <div className="nav-wrapper">
  
                <a href="#" className="brand-logo">PDF</a>
              </div>
            </div>
          </nav>
          {/*No onClick() event*/}
          <button className="btn light-blue darken-4" id="pdfd">
              Descargar pdf
          </button>
        </div>
        
      )
    }
  }
  
  export default Resultado;
