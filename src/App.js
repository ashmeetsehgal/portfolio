import React, { PureComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppHeader from './Components/organisms/AppHeader';
import AppBody from './Components/organisms/AppBody';
import './App.css';


// eslint-disable-next-line react/prefer-stateless-function
class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <AppBody />
        </div>
      </Router>
    );
  }
}

export default App;
