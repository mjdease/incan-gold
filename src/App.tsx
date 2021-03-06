import * as React from 'react';
import { RouteComponentProps, withRouter, Switch, Route } from 'react-router';
import { Container } from 'reactstrap';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MenuMain from './components/MenuMain/MenuMain';
import TrackerView from './containers/TrackerView';
import NoMatch from './components/NoMatch/NoMatch';

import './App.css';


interface AppProps {

}

// interface Props extends RouteComponentProps<void> {

// }

class App extends React.Component<AppProps & RouteComponentProps<void>, void> {
  render() {
    return (
      <div>
        <Header />
        <div className="app-content">
          <Container>
            <Switch>
              <Route exact={true} path="/" component={MenuMain} />
              <Route path="/play" component={MenuMain} />
              <Route path="/track" component={TrackerView} />
              <Route component={NoMatch} />
            </Switch>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter<AppProps>(App);
