import * as React from 'react';

import Card from './Card/Card';

interface GemCardProps {
  type: ig.hazardTypes;
  className?: string;
  showEquivalent?: 'hover' | 'always' | false;
}

type hazardEquivalenceMap = {[name in ig.hazardTypes]: string};

const hazardEquivalence: hazardEquivalenceMap = {
  fire: 'Fire',
  bug: 'Spiders',
  spy: 'Mummy',
  bolt: 'Snake',
  bomb: 'Rockfall',
};

function getLabel(hazardType: ig.hazardTypes): string {
  return ` IG Equivalent: ${hazardEquivalence[hazardType]}`;
}

const GemCard: React.SFC<GemCardProps> = (props) => {
  if (props.showEquivalent) {
    var label: string = getLabel(props.type);
  }

  return (
    <Card
      type="hazard"
      iconName={props.type}
      className={props.className}
      label={label}
      labelDisplay={props.showEquivalent}
    />
  );
};

export default GemCard;