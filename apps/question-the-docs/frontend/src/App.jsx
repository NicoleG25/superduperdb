import { useState } from 'react'
import DropdownMenu from './components/DropdownMenu'
import Query from './components/Query'
import handleSubmit from './services/queries'
import SubmitButton from './components/SubmitButton';
import Header from './components/Header';
import MarkdownDisplay from './components/MarkdownDisplay';
import './App.css'


function App() {
  const [responseText, setResponseText] = useState('');
  const [inputText, setInputText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <>
      <Header />

      <h1>Question the Docs</h1>

      <DropdownMenu selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

      <Query inputText={inputText} setInputText={setInputText} />
      
      <SubmitButton submit={async () => {await handleSubmit({inputText, setResponseText, selectedOption})}} />

      <MarkdownDisplay responseText={responseText} />
    </>
  )
}

export default App
