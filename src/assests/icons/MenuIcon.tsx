import React from 'react';
import Svg, {Path} from 'react-native-svg';

const MenuIcon = ({
  size,
  fill,
  ...props
}: {
  size: number;
  fill: string;
}): any => {
  return (
    <Svg
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 1024 1024"
      {...props}>
      <Path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
    </Svg>
  );
};
export default MenuIcon;
