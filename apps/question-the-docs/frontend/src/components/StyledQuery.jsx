// StyledQuery.jsx

import React from 'react';
import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';

const StyledQueryInput = styled(TextField)`
  width: 300px;
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 4px;
  transition: border-color 0.3s, box-shadow 0.3s;
  margin-top: 20px;
  margin-bottom: 20px;

  &:focus {
    border-color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.palette.action.focus};
  }
`;

const StyledQuery = ({ inputText, setInputText, isError }) => {
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <StyledQueryInput
            type="text"
            error={isError}
            placeholder="Search in Documentation"
            value={inputText}
            onChange={handleInputChange}
        />
    );
};

export default StyledQuery;
