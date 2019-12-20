import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarPage from './components/NavbarPage';
import Login from './components/login';
import Splitpane from 'react-split-pane';

class App extends Component  {
  render(){
    return (
      <div>
      <NavbarPage/>
     <Splitpane split="vertical" minSize={50} defaultSize={100}>
      <div class="image-container">
        <h1>Test</h1>
      </div>
      <div>
        <Login/>
      </div>
      </Splitpane>
      </div>
    );
  }

}
export default App;