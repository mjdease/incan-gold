import * as React from 'react';

import Card from './Card/Card';

interface GemCardProps {
  type: ig.hazardTypes;
  className?: string;
}

const GemCard: React.SFC<GemCardProps> = (props) => {
  return (
    <Card type="hazard" iconName={props.type} className={props.className} />
  );
};

export default GemCard;