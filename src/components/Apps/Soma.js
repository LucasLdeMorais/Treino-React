import React, { Component } from 'react';

//stylesheets

class Soma extends Component {
  /*React stuff*/
  constructor(props){
    super(props);
    this.state = {
      input : ''
    }

    this.updateInput = this.updateInput.bind(this);
  }


  updateInput(event){
    this.setState({input : event.target.value})
  }

  handleSubmit(){
    console.log('Your input value is: ' + this.state.input)
    //Send state to the server code
  }

  render() {
    /*JavaScript here*/
    var x = 2;
    var y = 2;
    var z = this.state.input;
    function addTwoNumbers(x, y) {
      return x + y;
    }

    function checkZ(z,x,y){
      if (z == x+y) {
        return "acertô, miserávi";
      } else if (z == '') {
      } else {
          return "Errrrrou. Era pra ser " + addTwoNumbers(x, y);
      }
    }
    
    return (
      /* HTML here */
      <main>
        <div id="teste">
          <h2>Digite a resposta correta</h2>
          <form id="frm1" action="/App.js">
          {x} + {y} = <input type="text" onChange={this.updateInput}></input><br></br>
          </form>
          <div id="resposta">
            {checkZ(z,x,y)}
          </div>
        </div>
      </main>

    );
  }
}

export default Soma;
