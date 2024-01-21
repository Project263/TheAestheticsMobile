import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const HomeIcon = (props: SvgProps) => {
  return (
    <Svg width={24} height={24}>
      <Path {...props} d="M10 21v-6h4v6h5v-8h3L12 4 2 13h3v8h5Z" />
    </Svg>
  );
};
