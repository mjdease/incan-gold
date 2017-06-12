import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container } from 'reactstrap';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MenuMain from './components/MenuMain/MenuMain';

import './App.css';


interface Props extends RouteComponentProps<void> {

}

class App extends React.Component<Props, void> {
  render() {
    return (
      <div>
        <Header />
        <div className="app-content">
          <Container>
            <MenuMain />
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
