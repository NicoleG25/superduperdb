import * as React from 'react';
import { Select, MenuItem, FormControl, InputLabel, styled } from '@mui/material';

const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};

const StyledSelect = styled(Select)`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-width: 320px;
  padding: 8px 12px;
  border-radius: 8px;
  text-align: left;
  line-height: 1.5;
  background: ${({ theme }) =>
    theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid
    ${({ theme }) => (theme.palette.mode === 'dark' ? grey[700] : grey[200])};
  color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  position: relative;
  box-shadow: 0px 2px 24px
    ${({ theme }) =>
    theme.palette.mode === 'dark' ? blue[900] : blue[100]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${({ theme }) =>
    theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  /* Rest of the styling... */
`;

const DropdownMenu = ({ selectedOption, setSelectedOption }) => {
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <FormControl variant="outlined">
                <InputLabel id="dropdown-label">Choose Documentation</InputLabel>
                <StyledSelect
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedOption}
                    onChange={handleOptionChange}
                    label="Choose Documentation"
                    defaultValue="Choose Documentation"
                >
                    <MenuItem value="">Choose Documentation</MenuItem>
                    <MenuItem value="superduperdb">SuperDuperDB</MenuItem>
                    <MenuItem value="langchain">LangChain</MenuItem>
                    <MenuItem value="fastchat">FastChat</MenuItem>
                </StyledSelect>
            </FormControl>
        </div>
    );
};

export default DropdownMenu;
