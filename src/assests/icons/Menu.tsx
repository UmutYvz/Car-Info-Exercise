import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const Menu = ({size, fill, ...props}: {size: number; fill: string}): any => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props} fill={fill}>
      <G strokeWidth="1.5" fill={fill}>
        <Path
          d="M3 5h18"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3 12h13"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3 19h8"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
export default Menu;
