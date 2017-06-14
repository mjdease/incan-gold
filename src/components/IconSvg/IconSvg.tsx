import * as React from 'react';

import * as svgs from './svgs';

type iconMapType = { [key in ig.iconName]: React.SFC<svgs.SvgProps>};

interface IconProps {
  name: ig.iconName;
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