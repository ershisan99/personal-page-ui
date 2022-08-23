import { createTheme } from '@mui/material/styles';

export const colors = {
  pink: '#F51A51',
  darkGrey: '#E5E5E5',
  midGrey: '#E6E6E6',
  lightGrey: '#DFE4E5',
  lightBlue: '#CCE9FC',
  hoverGrey: '#F4F4F4',
  blue: '#56B7F4',
  darkBlue: '#376588',
  green: '#30B800',
  white: '#fff',
  yellow: '#FFC112',
  orange: '#B88F00',
  almostWhite: '#FCFCFC',
  black: '#000',
  red: '#DC1749',
  lightBg: '#F9F9FA',
  darkBg: '#182636',
  darkFg: '#222F40',
  darkHeader: '#263648',
  darkNav: '#202E3F',
  darkBorder: '#2F3C4A',
  darkText: '#EFF5FC',
  tooltipLight: '#0F0D041A',
};

export const getTheme = (isDarkTheme: boolean) => {
  return createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',
      primary: { main: isDarkTheme ? colors.darkText : colors.black },
      secondary: { main: colors.pink },
      background: {
        default: isDarkTheme ? colors.darkBg : colors.lightBg,
        paper: isDarkTheme ? colors.darkHeader : colors.white,
      },
      info: { main: colors.darkNav },
    },
    typography: {
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ].join(','),
    },
    components: {
      MuiStepper: {
        styleOverrides: {
          root: {
            padding: '0',
            backgroundColor: 'transparent',
            minWidth: '460px',
            '& .MuiStep-root': {
              '& .MuiStepLabel-root': {
                '& .MuiStepLabel-iconContainer': {
                  '& .MuiStepIcon-root': {
                    color: isDarkTheme ? colors.darkFg : colors.white,
                    border: '2px solid #CCCCCC',
                    borderRadius: '50%',
                    '& .MuiStepIcon-text': {
                      fill: isDarkTheme ? colors.white : colors.darkBg,
                    },
                  },
                  '& .Mui-completed': {
                    color: colors.green,
                    border: 'none',
                    '& .MuiStepIcon-text': {
                      fill: colors.white,
                    },
                  },
                  '& .Mui-active': {
                    color: colors.pink,
                    border: 'none',
                    '& .MuiStepIcon-text': {
                      fill: colors.white,
                    },
                  },
                },
              },
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            border:
              '1px solid ' + isDarkTheme ? colors.darkNav : colors.tooltipLight,
            backgroundColor: isDarkTheme ? colors.darkFg : colors.white,
            padding: '12px',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
          },
          arrow: {
            color: isDarkTheme ? colors.darkFg : colors.white,
            '&:before': {
              border:
                '1px solid ' + isDarkTheme
                  ? colors.darkBorder
                  : colors.tooltipLight,
            },
          },
          popperArrow: {
            color: isDarkTheme ? colors.darkFg : colors.white,
            zIndex: 1550,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '30px',
            fontSize: '16px',
            fontWeight: 600,
            height: '36px',
            padding: '8px 28px',
            textTransform: 'none',
            whiteSpace: 'nowrap',
            '&.MuiButton-textInfo': {
              backgroundColor: isDarkTheme ? colors.darkHeader : colors.white,
              boxShadow: isDarkTheme
                ? '0px 2px 10px #1D2937, inset 0px 1px 0px #35455A'
                : '0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
              color: isDarkTheme ? colors.darkText : colors.black,
              '&.Mui-disabled': {
                opacity: 0.4,
              },
            },
          },
          textPrimary: {
            backgroundColor: colors.pink,
            boxShadow:
              '0px 4px 18px rgba(245, 26, 81, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3);',
            color: 'white',
            '&:hover': {
              backgroundColor: colors.pink,
            },
            '&.Mui-disabled': {
              color: 'white',
              opacity: 0.6,
            },
          },
          textSecondary: {
            backgroundColor: isDarkTheme ? colors.white : colors.black,
            boxShadow:
              '0px 2px 10px rgba(0, 0, 0, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
            color: isDarkTheme ? colors.black : colors.white,
            '&:hover': {
              backgroundColor: isDarkTheme ? colors.white : colors.black,
            },
            '&.Mui-disabled': {
              color: isDarkTheme ? colors.black : colors.white,
              opacity: 0.6,
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            '& .MuiTabs-flexContainer': {
              borderBottom: `3px solid ${isDarkTheme ? '#46515E' : '#C4C4C4'}`,
            },
            color: colors.pink,
            '& .MuiTabs-indicator': {
              height: '3px',
              backgroundColor: colors.pink,
              color: colors.pink,
            },
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '24px',
            textTransform: 'none',
            color: isDarkTheme ? '#46515E' : '#C4C4C4',
            '&.Mui-selected': {
              color: colors.pink,
            },
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            border: isDarkTheme ? '1px solid #2F3C4A' : '1px solid #E5E5E5',
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkTheme ? '#222F40' : 'white',
            borderBottom: isDarkTheme
              ? '1px solid #46515E'
              : '1px solid #E5E5E5',
          },
        },
      },
    },
  });
};
