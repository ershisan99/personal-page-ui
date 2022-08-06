import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Dialog,
  DialogProps,
  Grid,
  IconButton,
  SxProps,
  useTheme,
} from '@mui/material';
import React, { FC } from 'react';

export type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  width?: number;
  mainContentStyle?: SxProps;
  titleStyle?: SxProps;
  dialogProps?: DialogProps;
};

export const UiModal: FC<Props> = ({
  open,
  onClose,
  title,
  children,
  width,
  mainContentStyle,
  titleStyle,
  dialogProps,
}) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  const style = mainContentStyle
    ? mainContentStyle
    : {
        width: width || 500,
        boxShadow: 24,
        position: 'relative',
      };
  const defaultTitleStyle = titleStyle
    ? titleStyle
    : {
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '21px',
      };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: isDarkTheme ? '#182636' : '#FFFFFF',
          backgroundImage: 'none',
          maxWidth: '100%',
        },
      }}
      {...dialogProps}
    >
      <Box sx={style}>
        <Grid
          container
          direction="row"
          justifyContent={'space-between'}
          alignItems={'center'}
          style={{
            padding: '0 24px',
            height: '60px',
            borderBottom: isDarkTheme
              ? '1px solid rgba(0, 0, 0, 0.1)'
              : '1px solid #E5E5E5',
          }}
        >
          <Box sx={defaultTitleStyle}>{title}</Box>
          <Box justifyContent="center" alignItems="center" display="flex">
            <IconButton onClick={onClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </Grid>

        <Grid style={{ padding: '15px 24px 36px 24px', overflow: 'auto' }}>
          {children}
        </Grid>
      </Box>
    </Dialog>
  );
};
