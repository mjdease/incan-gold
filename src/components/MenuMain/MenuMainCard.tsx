import * as React from 'react';
import Icon from 'react-fa';
import { Link } from 'react-router-dom';
import * as reactstrapTypes from '../../types/extensions/reactstrap';
import { Card, CardBlock, CardImg, CardText } from 'reactstrap';
const Button = require('reactstrap').Button as reactstrapTypes.Button;

import './MenuMainCard.css';

interface Props {
  icon: string;
  description: string;
  buttonText: string;
  path: string;
  disabled?: boolean;
}

const MenuMain: React.StatelessComponent<Props> = (props) => {
  return (
    <Card inverse={true} className="menu-card text-center">
      <CardImg top={true} tag="div" className="menu-card__image">
        <Icon name={props.icon} size="5x" />
      </CardImg>
      <CardBlock>
        <CardText>
          {props.description}
        </CardText>
        <Button
          disabled={props.disabled}
          outline={true}
          color="info"
          tag={Link}
          to={props.path}
        >
          {props.buttonText}
        </Button>
      </CardBlock>
    </Card>
  );
};

export default MenuMain;