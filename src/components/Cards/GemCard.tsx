import * as React from 'react';

import Card from './Card/Card';

interface GemCardProps {
  value?: ig.gemValue;
  className?: string;
}

const GemCard: React.SFC<GemCardProps> = (props) => {
  return (
    <Card type="gem" iconName="diamond" value={props.value} className={props.className} />
  );
};

export default GemCard;