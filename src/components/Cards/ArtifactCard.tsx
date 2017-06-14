import * as React from 'react';

import Card from './Card/Card';

interface ArtifactCardProps {
  className?: string;
}

const ArtifactCard: React.SFC<ArtifactCardProps> = (props) => {
  return (
    <Card type="artifact" iconName="trophy" className={props.className} />
  );
};

export default ArtifactCard;