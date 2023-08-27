import { useState } from 'react';
import { Button, styled, ThemeProvider, createTheme } from '@mui/material';
import DropdownMenu from './components/DropdownMenu';
import Query from './components/Query';
import handleSubmit from './services/queries';
import Header from './components/Header';
import MarkdownDisplay from './components/MarkdownDisplay';
import './App.css';
import * as React from 'react';
import Container from '@mui/material/Container';
import DarkThemeToggle from "./components/ThemeToggle.jsx";
import StyledButton from "./components/StyledButton.jsx";
import StyledQuery from "./components/StyledQuery.jsx";

function App() {
    const [responseText, setResponseText] = useState('');
    const [inputText, setInputText] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [darkMode, setDarkMode] = useState(false); // Manage dark mode state

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (inputText) {
            await handleSubmit({ inputText, setResponseText, selectedOption });
        }
    };

    // Create a Material-UI theme
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            // Define your color palettes here for both light and dark modes
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Container className="centered-container">
                <Header />
                <h1>Question the Docs</h1>
                <form onSubmit={handleFormSubmit}>
                    <DarkThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    <DropdownMenu selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                    <StyledQuery inputText={inputText} setInputText={setInputText} />
                    <div>
                        <StyledButton type="submit" disabled={!inputText} variant="contained">
                            Submit
                        </StyledButton>
                    </div>
                </form>
                <MarkdownDisplay responseText={responseText} />
            </Container>
        </ThemeProvider>
    );
}

export default App;
