import React from 'react';

import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import s from './Error404.module.css';

import error404svg from './error404.svg';
export const Error404: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={s.mainBlock}>
      <div className={s.block}>
        <div className={s.leftBlock}>
          <div>
            <h2>Упс!</h2>
            <h3>Страница не найдена</h3>
          </div>
          <Button onClick={() => navigate(-1)} color="secondary">
            Вернуться назад
          </Button>
        </div>
        <div className={s.rightBlock}>
          <img src={error404svg} alt="404 icon" />
        </div>
      </div>
    </div>
  );
};
