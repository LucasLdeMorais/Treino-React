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
        notifyMe()
        return "acertô, miserávi";
      } else if (z == '') {
      } else {
          return "Errrrrou. Era pra ser " + addTwoNumbers(x, y);
      }
    }

    function notifyMe() {
      // Verifica se o browser suporta notificações
      if (!("Notification" in window)) {
        alert("Este browser não suporta notificações de Desktop");
      }

      // Let's check whether notification permissions have already been granted
      else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification("Hi there!");
      }

      // Otherwise, we need to ask the user for permission
      else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
          // If the user accepts, let's create a notification
          if (permission === "granted") {
            var notification = new Notification("Hi there!");
          }
        });
      }

      // At last, if the user has denied notifications, and you
      // want to be respectful there is no need to bother them any more.
      }Notification.requestPermission();function spawnNotification(corpo,icone,titulo) {
      var opcoes = {
          body: corpo,
          icon: icone
      }
      var n = new Notification(titulo,opcoes);
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
