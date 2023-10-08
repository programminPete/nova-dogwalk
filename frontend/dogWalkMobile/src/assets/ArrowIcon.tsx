import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const BASE_HEIGHT = 24;
const BASE_WIDTH = 24;

export default function ArrowIcon(props: {
  width?: number;
  height?: number;
  color?: string;
  rotation?: number;
}) {
  // center point is 1/2 width, 1/2 height
  const width = BASE_WIDTH;
  const height = BASE_HEIGHT;
  const [centerX, centerY] = [BASE_WIDTH / 2, BASE_HEIGHT / 2];

  return (
    <Svg
      fill="none"
      height={String(height)}
      viewBox={`0 0 ${BASE_WIDTH} ${BASE_HEIGHT}`}
      width={String(width)}>
      <G origin={`${centerX}, ${centerY}`} rotation={props.rotation || 0}>
        <Path
          d="M5.662 16.389L11.98 9.22l6.36 7.214.61-.538-6.97-7.907-6.928 7.86.61.539z"
          fill={props.color || '#000'}
        />
      </G>
    </Svg>
  );
}
