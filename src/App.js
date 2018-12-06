import React, { Component } from 'react';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
//Stylesheets
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    /*JavaScript here*/
    var x = 2;
    var y = 2;

    var z = addTwoNumbers(x,y);

    function addTwoNumbers(x, y) {
       return x + y;
    }

    function checkZ(z,x,y){
      if (z == x+y) {
        return "acertô, miserávi";
      } else {
        return "Errrrrou";
      }
    }


  return (
    /* HTML here */
    <div className="App">
      <Header />
      <div id="teste">
        {x}+{y}={z} <br></br>
        {checkZ(z,x,y)}
      </div>
      <Footer />
    </div>
    );
  }
}

export default App;
