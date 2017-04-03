import React, { Component } from 'react';

class App extends Component {
  render() {
      var is = {
            'width': '100%',
            'height': '100vh',
            'background-repeat': 'no-repeat',
            'background-size': 'contain',
            'border': '1px solid red'
      }
    return (
        <div>
            <img src={require('./images/backbay.jpg')} style={is} alt=''></img>
        </div>
    );
  }
}

export default App;
