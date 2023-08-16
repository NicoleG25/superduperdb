const handleSubmit = async ({ inputText, setResponseText, selectedOption }) => {
    try {
      setResponseText('Awaiting response to "' + inputText + '"...');
      const response = await fetch('http://localhost:8000/documents/query', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "query": inputText, "collection_name": selectedOption }),
      });
      const data = await response.json();
      setResponseText(data.answer);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  export default handleSubmit;