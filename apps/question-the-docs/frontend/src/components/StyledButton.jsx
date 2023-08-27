import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)`
  color: ${({ theme }) =>
          theme.palette.mode === 'dark' ? theme.palette.primary.contrastText : theme.palette.common.white};
  background-color: ${({ theme }) =>
          theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) =>
            theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark};
    box-shadow: ${({ theme }) =>
            theme.palette.mode === 'dark' ? `0px 0px 10px ${theme.palette.primary.light}` : 'none'};
  }

  &:disabled {
    background-color: ${({ theme }) =>
            theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.action.disabledBackground};
    color: ${({ theme }) =>
            theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.action.disabled};
    opacity: 0.6;
    pointer-events: none;
    filter: ${({ theme }) => (theme.palette.mode === 'dark' ? 'brightness(85%)' : 'none')};

    /* Additional styling for dark mode and disabled state */
    color: ${({ theme }) =>
            theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.common.white};
    background-color: ${({ theme }) =>
            theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main};
    box-shadow: ${({ theme }) =>
            theme.palette.mode === 'dark' ? `0px 0px 10px ${theme.palette.primary.main}` : 'none'};
  }
`;

export default StyledButton;
