import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const LibIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#000"
      d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6Zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm-1 9H9V9h10v2Zm-4 4H9v-2h6v2Zm4-8H9V5h10v2Z"
    />
  </Svg>
);
