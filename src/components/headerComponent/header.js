import React, { Component } from 'react';

//stylesheets

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      //num : 1
    }

  //  this.updateInput = this.updateInput.bind(this);
  }


//  updateInput(event){
//    this.setState({num : event.target.value})
//  }

  render() {

    return (
      <header>
        <h1 id="webTitle">
          Big Title
        </h1>
      </header>
    );
  }
}

export default Header;
