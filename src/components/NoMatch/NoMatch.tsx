import * as React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';

import './NoMatch.css';

const NoMatch: React.StatelessComponent<{}> = () => {
  return (
    <Row className="no-match text-center text-white">
      <Col>
        <h2 className="no-match__description">Oops, this page doesn't exist.</h2>
        <Link to="/">
          <Button color="info" outline={true}>View Menu</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default NoMatch;