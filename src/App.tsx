import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import './App.css';

const logo = require('./logo.svg');

interface Props extends RouteComponentProps<{}> {

}

class App extends React.Component<Props, void> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Welcome to React
          </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
