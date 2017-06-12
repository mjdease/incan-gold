import * as React from 'react';
import { RouteComponentProps, withRouter, Switch, Route } from 'react-router';
import { Container } from 'reactstrap';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MenuMain from './components/MenuMain/MenuMain';
import NoMatch from './components/NoMatch/NoMatch';

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
            <Switch>
              <Route exact={true} path="/" component={MenuMain} />
              <Route path="/play" component={MenuMain} />
              <Route path="/track" component={MenuMain} />
              <Route component={NoMatch} />
            </Switch>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter<void>(App);
