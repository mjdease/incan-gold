import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';


interface Props extends RouteComponentProps<void> {

}

class App extends React.Component<Props, void> {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
