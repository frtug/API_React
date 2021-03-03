import React, { Component } from 'react';
import {  Jumbotron } from 'reactstrap';

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
     
    };
}

  render() {
    return(
    <React.Fragment>
   
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>API Practice</h1>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
  
}

export default Header;