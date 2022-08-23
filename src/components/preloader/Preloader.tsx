import React, { CSSProperties, FC } from 'react';

import { CircularProgress } from '@mui/material';
type Props = { styles?: CSSProperties };
export const UiPreloader: FC<Props> = React.memo(({ styles }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        ...styles,
      }}
    >
      <CircularProgress color="secondary" />
    </div>
  );
});
