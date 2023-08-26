import React from 'react';
import TextField from '@mui/material/TextField';


const Query = ({ inputText, setInputText, isError }) => {
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const textFieldStyle = {
        width: '300px',
        paddingBottom: '20px'
    };

    return (
        <TextField
            style={textFieldStyle}
            type="text"
            error={isError}
            placeholder="Search in Documentation"
            value={inputText}
            onChange={handleInputChange}
        />
    );
};

export default Query;
