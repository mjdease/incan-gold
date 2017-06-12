import * as React from 'react';
import { Row, Col, CardDeck } from 'reactstrap';
import MenuMainCard from './MenuMainCard';

import './MenuMain.css';

const MenuMain: React.StatelessComponent<{}> = () => {
  return (
    <Row className="justify-content-sm-center">
      <Col sm="12" md="10" lg="7">
        <CardDeck className="menu-deck">
          <MenuMainCard
            icon="users"
            description="Play online against your friends or the AI (coming soon)"
            buttonText="Play Now"
            path="/play"
            disabled={true}
          />
          <MenuMainCard
            icon="bar-chart"
            description="View statistics about your live games"
            buttonText="Track Game"
            path="/track"
          />
        </CardDeck>
      </Col>
    </Row>
  );
};

export default MenuMain;