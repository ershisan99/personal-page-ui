import {
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
  useTheme,
} from '@mui/material';
import Pagination, { PaginationProps } from '@mui/material/Pagination';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

const useStyles = makeStyles({
  root: {
    '&.MuiInputBase-root': {
      backgroundColor: 'white',
      '& .MuiSelect-select': {
        border: '1px solid #E5E5E5',
        borderRadius: '2px',
        padding: '2px 26px 2px 6px',
      },
      '& .MuiSelect-icon': {
        right: '2px',
      },
    },
    '&.MuiInput-underline:before': {
      borderBottom: 'none',
    },
    '&.MuiInput-underline:hover:before': {
      borderBottom: 'none',
    },
    '&.MuiInput-underline:after': {
      borderBottom: 'none',
    },
    '&.Mui-focused': {
      backgroundColor: 'white',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      display: 'none',
    },
  },
  rootSelectDark: {
    '&.MuiInputBase-root': {
      '& .MuiSelect-select': {
        backgroundColor: '#182636',
        border: '1px solid #263648',
        borderRadius: '2px',
        padding: '2px 26px 2px 6px',
      },
      '& .MuiSelect-icon': {
        right: '2px',
      },
    },
    '&.MuiInput-underline:before': {
      borderBottom: 'none',
    },
    '&.MuiInput-underline:hover:before': {
      borderBottom: 'none',
    },
    '&.MuiInput-underline:after': {
      borderBottom: 'none',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      display: 'none',
    },
  },
  rootPagination: {
    '&.MuiPagination-root': {
      '& .MuiPagination-ul': {
        '& .MuiPaginationItem-root': {
          color: 'white',
        },
        '& .MuiButtonBase-root': {
          color: 'white',
        },
        '& .MuiPaginationItem-page:hover': {
          backgroundColor: '#263648',
        },
        '& .MuiPaginationItem-page.Mui-selected': {
          backgroundColor: '#263648',
        },
      },
    },
  },
});
type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  totalItems: number;
  pageSizeOptions?: number[];
  itemName: string;
  paginationProps?: PaginationProps;
  selectProps?: SelectProps<number>;
};
export const UiPagination: React.FC<Props> = ({
  page,
  setPage,
  pageSize,
  totalItems,
  setPageSize,
  pageSizeOptions,
  itemName,
  paginationProps,
  selectProps,
}) => {
  const handlePageChange: (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => void = (_event, value) => {
    setPage(value);
  };
  const handlePageSizeChange: (
    event: SelectChangeEvent<number>
  ) => void = event => {
    setPageSize(+event.target.value);
  };
  const classes = useStyles();
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';
  const totalPages = Math.ceil((totalItems || 1) / pageSize);
  return (
    <div style={{ display: 'flex' }}>
      <Pagination
        className={!isDarkTheme ? '' : classes.rootPagination}
        count={totalPages}
        shape="rounded"
        page={page}
        onChange={handlePageChange}
        {...paginationProps}
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ margin: '0 6px 0 12px' }}>Показать</p>
        <Select
          id="selectPagination"
          value={pageSize}
          onChange={handlePageSizeChange}
          className={!isDarkTheme ? classes.root : classes.rootSelectDark}
          {...selectProps}
        >
          {pageSizeOptions ? (
            pageSizeOptions.map(value => (
              <MenuItem value={value} key={value}>
                {value}
              </MenuItem>
            ))
          ) : (
            <>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
            </>
          )}
        </Select>
        <p style={{ margin: '0 6px 0 12px' }}>{itemName} на странице</p>
      </div>
    </div>
  );
};
