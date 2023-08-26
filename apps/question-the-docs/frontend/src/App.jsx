import { useState } from 'react';
import DropdownMenu from './components/DropdownMenu';
import Query from './components/Query';
import handleSubmit from './services/queries';
import Header from './components/Header';
import MarkdownDisplay from './components/MarkdownDisplay';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function App() {
    const [responseText, setResponseText] = useState('');
    const [inputText, setInputText] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (inputText) {
            await handleSubmit({ inputText, setResponseText, selectedOption });
        }
    };

    return (
        <Container className="centered-container">
            <Header />
            <h1>Question the Docs</h1>
            <form onSubmit={handleFormSubmit}>
                <DropdownMenu selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                <Query inputText={inputText} setInputText={setInputText} />
                <div>
                    <Button type="submit" disabled={!inputText} variant="contained">
                        Submit
                    </Button>
                </div>
            </form>
            <MarkdownDisplay responseText={responseText} />
        </Container>
    );
}

export default App;
