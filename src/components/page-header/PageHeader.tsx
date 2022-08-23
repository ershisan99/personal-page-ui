import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PropsType extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  onClick?: () => void;
  backButtonText?: string;
}

// в children передаётся кнопка (или div с кнопками),
// отвечающая за основное действие страницы (добавить урок/видео...)
//если нужна кнопка назад - передать backButtonText

export const UiPageHeader: React.FC<PropsType> = ({
  title,
  onClick,
  backButtonText,
  children,
  ...rest
}) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Grid container {...rest}>
      {backButtonText && (
        <Grid container item alignItems="center" marginBottom="20px">
          <IconButton edge="start" onClick={goBack}>
            <KeyboardBackspaceIcon />
          </IconButton>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            {backButtonText}
          </Typography>
        </Grid>
      )}
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item onClick={onClick}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '22px',
              lineHeight: '27px',
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </Grid>
  );
};
