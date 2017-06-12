import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBlock, CardImg, CardText, Button } from 'reactstrap';
import Icon from 'react-fa';

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
        {/*
        TODO remove Link and make it part of the Button props when the ts definition supports it
        https://github.com/DefinitelyTyped/DefinitelyTyped/issues/17123
        */}
        <Link to={props.path}>
          <Button disabled={props.disabled} outline={true} color="info">{props.buttonText}</Button>
        </Link>
      </CardBlock>
    </Card>
  );
};

export default MenuMain;