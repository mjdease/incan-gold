import * as React from 'react';

import * as svgs from './svgs';

type iconName =
  | 'bolt'
  | 'bomb'
  | 'bug'
  | 'diamond'
  | 'fire'
  | 'rocket'
  | 'trophy';
type iconMapType = { [key in iconName]: React.SFC<svgs.SvgProps>};

interface IconProps {
  name: iconName;
  className?: string;
}

const iconMap: iconMapType = {
  bolt: svgs.bolt,
  bomb: svgs.bomb,
  bug: svgs.bug,
  diamond: svgs.diamond,
  fire: svgs.fire,
  rocket: svgs.rocket,
  trophy: svgs.trophy,
};

const Icon: React.StatelessComponent<IconProps> = function(props: IconProps) {
  const Svg: React.SFC<svgs.SvgProps> = iconMap[props.name];

  return (
    <Svg className={props.className} />
  );
};

export default Icon;