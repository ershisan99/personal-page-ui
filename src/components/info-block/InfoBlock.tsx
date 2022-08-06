import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Collapse, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { ReactNode, useState } from 'react';
import { WithChildren } from './../../helpers/withChildren';
import s from './InfoBlock.module.css';

type Props = WithChildren<{
  title: string;
  titleIcon?: ReactNode;
  tooltip?: ReactNode;
  expandable?: boolean;
  className?: string;
  isOpenProp?: boolean;
  onClickHandler?: () => void;
  noBorder?: boolean;
  disabled?: boolean;
}>;

export const UiInfoBlock: React.FC<Props> = ({
  title,
  titleIcon,
  tooltip,
  expandable,
  children,
  className,
  isOpenProp,
  onClickHandler,
  noBorder,
  disabled,
}) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  const [isOpen, setIsOpen] = useState(false);
  const toggleBlockHandler = () => {
    expandable && setIsOpen(!isOpen);
  };
  return (
    <div className={className}>
      <div
        onClick={onClickHandler ? onClickHandler : toggleBlockHandler}
        className={`${s.header} ${isDarkTheme ? s.headerDark : ''}`}
        style={{
          cursor: expandable ? (disabled ? 'not-allowed' : 'pointer') : 'auto',
        }}
      >
        <div className={s.tooltipBox}>
          {tooltip && <p className={s.tooltip}>{tooltip}</p>}
          {titleIcon}
          <p>{title}</p>
        </div>
        {expandable && (
          <IconButton
            aria-label="expand row"
            size="small"
            sx={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
          >
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        )}
      </div>

      {/* Block content  */}
      <Collapse
        in={
          expandable ? (isOpenProp !== undefined ? isOpenProp : isOpen) : true
        }
        timeout="auto"
        unmountOnExit
        sx={{ width: '100%' }}
      >
        <div
          className={`${s.content} ${isDarkTheme ? s.contentDark : ''}}`}
          style={{ border: noBorder ? 'none' : '' }}
        >
          {children}
        </div>
      </Collapse>
    </div>
  );
};
