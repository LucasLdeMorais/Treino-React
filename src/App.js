import React, { Component } from 'react';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Soma from './components/Apps/Soma';

//Stylesheets
import './Assets/css/default.min.css';
import './Assets/css/header.min.css';

class App extends Component {

  render() {
    /*JavaScript here*/

    return (
      /* HTML here */
      <div className="App">
        <Header />
        <Soma />
        <Footer />
      </div>
    );
  }
}

export default App;
