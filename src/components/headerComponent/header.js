import React, { Component } from 'react';

//stylesheets

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      num : 1
    }

    this.updateInput = this.updateInput.bind(this);
  }


  updateInput(event){
    this.setState({num : event.target.value})
  }

  render() {
    var num = this.state.num;

    function addOne(num){
      return  num + 1;
    }

    return (
      <header>

      <h1 className="logo">
        Header
      </h1>

      <nav>
        <ul>
          <li>link {num}</li>
          <li>link {num}</li>
          <li>link {num}</li>
          <li>link {num}</li>
          <li>link {num}</li>
          <li>link {num}</li>
          <li><button onClick={this.updateInput}>clique aqui para +1</button></li>
        </ul>

      </nav>

      </header>
    );
  }
}

export default Header;
