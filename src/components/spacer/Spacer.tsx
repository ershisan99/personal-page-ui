import React, { FC } from 'react';
type Props = {
  space: number;
  horizontal?: boolean;
};
export const Spacer: FC<Props> = ({ space, horizontal }) => {
  return (
    <div
      aria-label="spacer"
      style={{
        width: horizontal ? space : '100%',
        height: horizontal ? '100%' : space,
      }}
    />
  );
};
