import * as React from 'react';
import {
    ThemeProvider,
    createTheme,
    CssBaseline,
    FormControlLabel,
    Switch,
    styled,
} from '@mui/material';

const DarkThemeToggle = () => {
    const [darkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const ToggleContainer = styled('div')({
        position: 'absolute',
        top: '16px',
        right: '16px',
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToggleContainer>
                <FormControlLabel
                    control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
                    label="Dark Mode"
                />
            </ToggleContainer>
        </ThemeProvider>
    );
};

export default DarkThemeToggle;
