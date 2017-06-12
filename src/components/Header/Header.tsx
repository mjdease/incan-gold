import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Navbar, NavbarBrand, Container } from 'reactstrap';
import Icon from 'react-fa';

class Header extends React.Component<RouteComponentProps<void>, {}> {
  goHome: React.MouseEventHandler<MouseEvent> = (event) => {
    event.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <Navbar inverse={true} color="inverse" className="header">
        <Container>
          <NavbarBrand href="#" onClick={this.goHome}>
            <Icon name="diamond"/> Incan Gold Online
          </NavbarBrand>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter<void>(Header);